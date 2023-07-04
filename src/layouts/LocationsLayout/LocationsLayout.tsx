'use client';

import { useMemo, useEffect } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';

import Map from '@components/pages/OrangeLeaf/Locations/Map/Map';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import { ContentWrapper, Column, MapWrapper } from './LocationsLayout.styles';

import { useStore } from 'src/context/StoreProvider';

import type { FC, ReactNode } from 'react';
import type { Location } from '@components/pages/OrangeLeaf/Locations/SearchResults/SearchResults';

export type Marker = { lat: number; lng: number; id: number };

export const LocationsLayout: FC<{ children: ReactNode; initialLocations: Location[] }> = ({
  children,
  initialLocations,
}) => {
  const segments = useSelectedLayoutSegments();
  const { width } = useWindowSize();
  const { locations, setLocations, footerHeight } = useStore();

  useEffect(() => {
    setLocations(initialLocations);
  }, [initialLocations, setLocations]);

  const markers = useMemo(
    () =>
      locations.map(({ lat, lng, id }) => ({
        id,
        lat,
        lng,
      })),
    [locations],
  );

  return (
    <ContentWrapper footerHeight={footerHeight}>
      <Column>{children}</Column>
      {width && width <= theme.breakpoints.tablet && segments.length > 0 ? null : (
        <MapWrapper>
          <Map markers={markers} />
        </MapWrapper>
      )}
    </ContentWrapper>
  );
};

export default LocationsLayout;
