import LocationInfo from '@components/pages/OrangeLeaf/Locations/LocationInfo/LocationInfo';

import type { FC } from 'react';

type NextOpen = {
  closedNow: boolean;
  neverOpens: boolean;
  dayOfWeek: number;
  hour: string;
  date: string;
};

type OpeningHour = {
  dayOfWeek: number;
  from1: string;
  to1: string;
  closed?: boolean;
};

type Category = {
  name: string;
};

type SocialProfile = {
  type: string;
  url: string;
};

export type SingleLocation = {
  addressExtra: null;
  businessId: number;
  callToActions: string[];
  city: string;
  country: string;
  distance: null;
  futureOpeningDate: null;
  id: number;
  identifier: string;
  inventory: string[];
  lat: number;
  lng: number;
  name: string;
  nextOpen: NextOpen;
  openingHours: OpeningHour[];
  openingHoursNotes: null;
  openNow: boolean;
  phone: string;
  photos: string[];
  province: string;
  specialOpeningHours: string[];
  streetAndNumber: string;
  zip: string;
  averageRating: null;
  brands: string[];
  categories: Category[];
  cellphone: null;
  customItems: string[];
  descriptionLong: string;
  descriptionShort: null;
  email: null;
  events: string[];
  fax: null;
  imprint: null;
  keywords: string[];
  labels: string[];
  languages: string[];
  menus: string[];
  paymentOptions: string[];
  people: string[];
  products: string[];
  reviewCount: number;
  reviews: string[];
  socialPost: null;
  socialProfiles: SocialProfile[];
  taxNumber: null;
  timezone: string;
  videos: string[];
  website: string;
  services: string[];
};

type GetLocationReturnType = { response: SingleLocation };

async function getLocation(id: string): Promise<GetLocationReturnType> {
  const res = await fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://uberall.com/api/store-finders/${process.env.NEXT_PUBLIC_UBERALL_API_KEY}/locations/${id}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<GetLocationReturnType>;
}

/* @ts-expect-error Server Component */
const Location: FC = async ({ params: { id } }) => {
  const { response } = await getLocation(id);

  return <LocationInfo location={response} />;
};
export default Location;
