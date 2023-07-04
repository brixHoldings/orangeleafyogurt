type ResponseData = {
  access_token: string;
};

type BodyData = {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  contactTime: string;
  cash: string;
  phone: string;
};

const getSource3Id = (brand: string): string => {
  if (brand === 'ol') {
    return 'Orange Leaf Website';
  }

  if (brand === 'sf') {
    return 'Smoothie Factory Website';
  }

  return 'Red Mango Website';
};

const getDivision = (brand: string): string => {
  if (brand === 'ol') {
    return 'Orange Leaf';
  }

  if (brand === 'sf') {
    return 'Smoothie Factory';
  }

  return 'Red Mango';
};

export const POST = async (request: Request): Promise<Response> => {
  const authParams = new URLSearchParams();
  authParams.append('grant_type', 'client_credentials');

  const responseData = await fetch(
    'https://auth.franconnect.net/userauth/oauth/token?X-TenantID=brixholdings.franconnect.net',
    {
      body: authParams,
      headers: {
        // Authorization: `Basic ${btoa('brixholdingsapi:3YuvgQL9nYd4SmivWZPZybwxjvFuQZG8')}`, //btoa not defined
        Authorization: `Basic YnJpeGhvbGRpbmdzYXBpOjNZdXZnUUw5bllkNFNtaXZXWlBaeWJ3eGp2RnVRWkc4`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'post',
    },
  );

  const { access_token: token } = (await responseData.json()) as ResponseData;
  const body = (await request.json()) as BodyData;
  const brand = new URL(request.url).searchParams.get('brand') ?? '';

  if (!['rm', 'ol', 'sf'].includes(brand)) {
    throw new Error('Invalid brand!');
  }

  await fetch(
    `https://brixholdings.franconnect.net/fc/rest/dataservices/create?module=fs&subModule=lead&xmlString=<?xml version='1.0' encoding='utf-8'?>
    <fcRequest>
    <fsLead>
    <firstName>${body.firstName}</firstName>
    <lastName>${body.lastName}</lastName>
    <city>${body.city}</city>
    <stateID>${body.state}</stateID>
    <zip>${body.zip}</zip>
    <bestTimeToContact>${body.contactTime}</bestTimeToContact>
    <mobile>${body.phone}</mobile>
    <emailID>${body.email}</emailID>
    <liquidCapitalMax>${body.cash}</liquidCapitalMax>
    <country>USA</country>
    <primaryPhoneToCall>Mobile</primaryPhoneToCall>
    <sendAutomaticMail>No</sendAutomaticMail>
    <basedOnAssignmentRule>Yes</basedOnAssignmentRule>
    <basedOnWorkflowAssignmentRule>Yes</basedOnWorkflowAssignmentRule>
    <leadSource2ID>Internet</leadSource2ID>
    <leadSource3ID>${getSource3Id(brand)}</leadSource3ID>
    <division>${getDivision(brand)}</division>
    </fsLead>
    </fcRequest>&responseType=XML`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'post',
    },
  );

  return new Response('OK', { status: 200 });
};
