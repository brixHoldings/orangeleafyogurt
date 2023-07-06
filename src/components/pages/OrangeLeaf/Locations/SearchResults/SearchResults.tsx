/* eslint-disable camelcase */
'use client';

import { useEffect, useMemo, useCallback } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

import SearchResultItem from './SearchResultItem';

import type { ChangeEvent, FC } from 'react';

import {
  Column,
  Title,
  SearchInput,
  FieldSet,
  MagnifierSvg,
  FindLocation,
  LocationSvg,
  FindLocationText,
  SearchResultList,
  SuggestionsList,
  Suggestion,
} from './SearchResults.styles';
import { getLocations } from 'src/app/locations/layout';
import { useStore } from 'src/context/StoreProvider';

type OpeningHour = {
  dayOfWeek: number;
  closed?: boolean;
  // from1?: string;
  to1?: string;
};

type NextOpen = {
  closedNow: boolean;
  neverOpens: boolean;
  dayOfWeek: number;
  hour: string;
  date: string;
};

export type Location = {
  addressExtra: null;
  businessId: number;
  callToActions: string[];
  city: string;
  country: string;
  distance: number;
  futureOpeningDate: string;
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
};

const SearchResults: FC = () => {
  const { locations, setLocations } = useStore();

  const { isGoogleScriptLoaded, setSearchResultCoordinates } = useStore();

  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
    init,
  } = usePlacesAutocomplete({
    debounce: 300,
    initOnMount: false,
    requestOptions: {
      componentRestrictions: { country: 'US' },
      types: ['address'],
    },
  });

  useEffect(() => {
    if (isGoogleScriptLoaded && Boolean(init)) {
      init();
    }
  }, [isGoogleScriptLoaded, init]);

  const shouldDisplaySuggestions = useMemo(
    () => isGoogleScriptLoaded && status === 'OK',
    [status, isGoogleScriptLoaded],
  );

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue],
  );

  const handleSelect = async ({ description }: { description: string }): Promise<void> => {
    setValue(description, false);
    clearSuggestions();

    const result = await getGeocode({ address: description });
    const { lat, lng } = getLatLng(result[0]);
    setSearchResultCoordinates({ lat, lng });

    const {
      response: { locations: fetchedLocations },
    } = await getLocations(lat, lng);

    setLocations(fetchedLocations);
  };

  const renderSuggestions = data.map((suggestion) => {
    const { place_id, description } = suggestion;

    return data.length ? (
      <Suggestion
        key={place_id}
        onClick={(): void => {
          void handleSelect(suggestion);
        }}
      >
        {description}
      </Suggestion>
    ) : (
      <Suggestion />
    );
  });

  const onNavigatorActivated = useCallback(() => {
    if (isGoogleScriptLoaded) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setSearchResultCoordinates({ lat: pos.coords.latitude, lng: pos.coords.longitude });

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          void (async (): Promise<void> => {
            try {
              const {
                response: { locations: fetchedLocations },
              } = await getLocations(pos.coords.latitude, pos.coords.longitude);

              setLocations(fetchedLocations);
              // eslint-disable-next-line no-empty
            } catch (error: unknown) {}
          })();
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        {
          enableHighAccuracy: true,
          maximumAge: 0,
        },
      );
    }
  }, [isGoogleScriptLoaded, setSearchResultCoordinates, setLocations]);

  return (
    <Column>
      <Title>Find your location</Title>
      <FieldSet>
        <MagnifierSvg fill="none" viewBox="0 0 25 25">
          <path
            d="M19.5 9.75c0 2.1562-.7031 4.1719-1.875 5.7656l5.9062 5.9532c.6094.5624.6094 1.5468 0 2.1093-.5624.6094-1.5468.6094-2.1093 0l-5.9531-5.9531C13.875 18.8438 11.8594 19.5 9.75 19.5 4.35938 19.5 0 15.1406 0 9.75 0 4.40625 4.35938 0 9.75 0c5.3438 0 9.75 4.40625 9.75 9.75ZM9.75 16.5c2.3906 0 4.5938-1.2656 5.8125-3.375 1.2187-2.0625 1.2187-4.64062 0-6.75C14.3438 4.3125 12.1406 3 9.75 3 7.3125 3 5.10938 4.3125 3.89062 6.375c-1.21874 2.10938-1.21874 4.6875 0 6.75C5.10938 15.2344 7.3125 16.5 9.75 16.5Z"
            fill="#421B00"
          />
        </MagnifierSvg>
        <SearchInput onChange={handleSearch} placeholder="Search city, state or Zip code" value={value} />
        {shouldDisplaySuggestions && <SuggestionsList>{renderSuggestions}</SuggestionsList>}
      </FieldSet>
      <FindLocation onClick={onNavigatorActivated}>
        <LocationSvg fill="none" viewBox="0 0 18 19">
          <path
            d="M12.375 9.25c0 1.8633-1.5117 3.375-3.375 3.375-1.89844 0-3.375-1.5117-3.375-3.375 0-1.86328 1.47656-3.375 3.375-3.375 1.8633 0 3.375 1.51172 3.375 3.375ZM9 7.5625c-.94922 0-1.6875.77344-1.6875 1.6875 0 .9492.73828 1.6875 1.6875 1.6875.91406 0 1.6875-.7383 1.6875-1.6875 0-.91406-.77344-1.6875-1.6875-1.6875ZM9 .25c.45703 0 .84375.386719.84375.84375v1.47656c3.02345.38672 5.44925 2.8125 5.83595 5.83594h1.4765c.4571 0 .8438.38672.8438.84375 0 .49219-.3867.8438-.8438.8438h-1.4765c-.3867 3.0585-2.8125 5.4843-5.83595 5.871v1.4414c0 .4922-.38672.8438-.84375.8438-.49219 0-.84375-.3516-.84375-.8438v-1.4414c-3.05859-.3867-5.48437-2.8125-5.87109-5.871H.84375C.351562 10.0938 0 9.74219 0 9.25c0-.45703.351562-.84375.84375-.84375h1.44141c.38672-3.02344 2.8125-5.44922 5.87109-5.83594V1.09375C8.15625.636719 8.50781.25 9 .25Zm-5.0625 9c0 2.8125 2.25 5.0625 5.0625 5.0625 2.7773 0 5.0625-2.25 5.0625-5.0625 0-2.77734-2.2852-5.0625-5.0625-5.0625-2.8125 0-5.0625 2.28516-5.0625 5.0625Z"
            fill="#FF9828"
          />
        </LocationSvg>
        <FindLocationText>or find a location near you</FindLocationText>
      </FindLocation>
      <SearchResultList>
        {locations.map((location) => (
          <SearchResultItem key={location.id} location={location} />
        ))}
      </SearchResultList>
    </Column>
  );
};

export default SearchResults;
