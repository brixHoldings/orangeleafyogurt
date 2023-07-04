import LocationsLayout from '@layouts/LocationsLayout/LocationsLayout';
import { initialCoordinates } from '@constants/initialCoordinates';

import type { FC, ReactNode } from 'react';
import type { Location } from '@components/pages/OrangeLeaf/Locations/SearchResults/SearchResults';

type GetLocationsReturnType = { response: { locations: Location[] } };

export async function getLocations(lat: number, lng: number): Promise<GetLocationsReturnType> {
  const res = await fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://uberall.com/api/store-finders/${process.env.NEXT_PUBLIC_UBERALL_API_KEY}/locations?lat=${lat}&lng=${lng}&radius=100000`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<GetLocationsReturnType>;
}

/* @ts-expect-error Server Component */
const LocationLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const {
    response: { locations },
  } = await getLocations(initialCoordinates.lat, initialCoordinates.lng);

  return <LocationsLayout initialLocations={locations}>{children}</LocationsLayout>;
};

export default LocationLayout;
