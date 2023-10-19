'use client';

import {
  StoreSvg,
  StreetWrapper,
  Wrapper,
  Street,
  ArrowSvg,
  Address,
  InfoWrapper,
  WorkingHours,
  WorkingHoursWrapper,
  ClockIcon,
  LinkToLocation,
} from './SearchResultItem.styles';

import type { FC } from 'react';
import type { Location } from './SearchResults';
import { convertTo12HourFormat } from '../LocationInfo/LocationInfo';
import { useRouter } from 'next/navigation';
import { useStore } from '@context/StoreProvider';

const SearchResultItem: FC<{ location: Location }> = ({ location }) => {
  const router = useRouter();

  console.log(888, location);

  const { city, province, openNow, zip, streetAndNumber, id, lat, lng, openingHours } = location;
  const { setSearchResultCoordinates, setLocations } = useStore();

  const date = new Date();
  const currentDayOfTheWeek = date.getDay();

  const closingHours = openingHours.find((day) => day.dayOfWeek === currentDayOfTheWeek);
  const openHoursString =
    openNow && closingHours ? `Open Until ${convertTo12HourFormat(closingHours.to1 as string)}` : 'Closed Now';

  const onClick = (): void => {
    setSearchResultCoordinates({ lat, lng });
    setLocations([location]);
    router.push(`/locations/${id}`);
  };

  return (
    <Wrapper>
      <StoreSvg fill="none" viewBox="0 0 60 60">
        <rect fill="#8BA726" height="60" opacity=".1" rx="30" width="60" />
        <path
          d="M13.0391 32.2793v16.245c0 .2623.2126.475.475.475h31.9833c.2623 0 .475-.2127.475-.475v-16.245m-35.7185-5.8258 4.6735-7.3791c.0871-.1375.2385-.2209.4013-.2209h28.3571c.1628 0 .3142.0834.4013.2209l4.6735 7.3791m-38.0106.4957h6.1v2.0367c0 1.6845-1.3655 3.05-3.05 3.05-1.6845 0-3.05-1.3655-3.05-3.05v-2.0367Zm6.5859 0h5.5934v2.29c0 1.5446-1.2521 2.7967-2.7967 2.7967s-2.7967-1.2521-2.7967-2.7967v-2.29Zm12.668 0h5.5933v2.29c0 1.5446-1.2521 2.7967-2.7966 2.7967-1.5446 0-2.7967-1.2521-2.7967-2.7967v-2.29Zm-6.5859 0h5.5933v2.29c0 1.5446-1.2521 2.7967-2.7967 2.7967-1.5445 0-2.7966-1.2521-2.7966-2.7967v-2.29Zm12.664 0h5.5934v2.29c0 1.5446-1.2521 2.7967-2.7967 2.7967s-2.7967-1.2521-2.7967-2.7967v-2.29Zm6.0821 0h6.1v2.0367c0 1.6845-1.3656 3.05-3.05 3.05-1.6845 0-3.05-1.3655-3.05-3.05v-2.0367Z"
          stroke="#8BA726"
          stroke-linecap="round"
          stroke-width="1.5"
        />
        <path
          d="M18.3516 37.8525c0-1.2647 1.0252-2.29 2.29-2.29 1.2647 0 2.29 1.0253 2.29 2.29v6.3433h-4.58v-6.3433ZM43.9461 49v-7.0934c0-4.1973-3.4026-7.6-7.6-7.6v0c-4.1974 0-7.6 3.4027-7.6 7.6V49m7.6016-14.6934V49m2.0234-7.3457v2.2792m-4.0508-2.2792v2.2792"
          stroke="#8BA726"
          stroke-linecap="round"
          stroke-width="1.5"
        />
        <path
          d="M15.0664 18.3472v-2.7867h6.5867m22.2933 2.7867v-2.7867h-7.0933m-.0008-.0005v0c0-2.5184-2.0415-4.56-4.56-4.56h-6.08c-2.5184 0-4.56 2.0416-4.56 4.56v0"
          stroke="#8BA726"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </StoreSvg>
      <InfoWrapper>
        <LinkToLocation onClick={onClick}>
          <StreetWrapper>
            <Street>{streetAndNumber}</Street>
            <ArrowSvg fill="none" viewBox="0 0 16 15">
              <path
                d="M15.5234 8.05859c.4571-.42187.4571-1.16015 0-1.58203L9.89844.851562c-.42188-.457031-1.16016-.457031-1.58203 0-.45703.421878-.45703 1.160158 0 1.582028L12.0078 6.125H1.25c-.632812 0-1.125.52734-1.125 1.125 0 .63281.492188 1.125 1.125 1.125h10.7578l-3.69139 3.7266c-.45703.4218-.45703 1.1601 0 1.582.42187.457 1.16015.457 1.58203 0l5.62496-5.62501Z"
                fill="#FF9828"
              />
            </ArrowSvg>
          </StreetWrapper>
        </LinkToLocation>
        <Address>
          {city}, {province}, {zip}
        </Address>
        <WorkingHoursWrapper>
          <ClockIcon fill="none" viewBox="0 0 18 20">
            <path
              d="M16.3125 10.25c0 2.6367-1.4063 5.0273-3.6563 6.3633-2.2851 1.3008-5.06245 1.3008-7.31245 0-2.28516-1.336-3.65625-3.7266-3.65625-6.3633 0-2.60156 1.37109-4.99219 3.65625-6.32812 2.25-1.30079 5.02735-1.30079 7.31245 0 2.25 1.33593 3.6563 3.72656 3.6563 6.32812ZM0 10.25c0 3.2344 1.6875 6.1875 4.5 7.8047 2.77734 1.6172 6.1875 1.6172 9 0 2.7773-1.6172 4.5-4.5703 4.5-7.8047 0-3.19922-1.7227-6.15234-4.5-7.76953-2.8125-1.617189-6.22266-1.617189-9 0C1.6875 4.09766 0 7.05078 0 10.25Zm8.15625-4.78125V10.25c0 .2812.14063.5625.35156.7031l3.37499 2.25c.3867.2813.9141.1758 1.1953-.2109.2461-.3867.1407-.9141-.2461-1.1953L9.84375 9.82812V5.46875c0-.45703-.38672-.84375-.84375-.84375-.49219 0-.84375.38672-.84375.84375Z"
              fill="#421B00"
            />
          </ClockIcon>
          <WorkingHours>{openHoursString}</WorkingHours>
        </WorkingHoursWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default SearchResultItem;
