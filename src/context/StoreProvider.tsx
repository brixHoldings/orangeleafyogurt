import { createContext, useMemo, useContext, useState } from 'react';

import type { FC, ReactNode } from 'react';
import { initialCoordinates } from '@constants/initialCoordinates';

type ContextValue = {
  setIsGoogleScriptLoaded: (value: boolean) => void;
  isGoogleScriptLoaded: boolean;
  searchResultCoordinates: { lat: number; lng: number };
  setSearchResultCoordinates: (value: { lat: number; lng: number }) => void;
  footerHeight: number;
  navigationHeight: number;
  setFooterHeight: (value: number) => void;
  setNavigationHeight: (value: number) => void;
};

const StoreContext = createContext<ContextValue>({
  footerHeight: 0,
  navigationHeight: 0,
  isGoogleScriptLoaded: false,
  searchResultCoordinates: { lat: 0, lng: 0 },
  setFooterHeight: () => undefined,
  setNavigationHeight: () => undefined,
  setIsGoogleScriptLoaded: () => undefined,
  setSearchResultCoordinates: () => undefined,
});

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isGoogleScriptLoaded, setIsGoogleScriptLoaded] = useState(false);
  const [searchResultCoordinates, setSearchResultCoordinates] = useState(initialCoordinates);
  const [footerHeight, setFooterHeight] = useState(0);
  const [navigationHeight, setNavigationHeight] = useState(0);

  const memoedValue = useMemo(
    () => ({
      footerHeight,
      setNavigationHeight,
      navigationHeight,
      isGoogleScriptLoaded,
      searchResultCoordinates,
      setFooterHeight,
      setIsGoogleScriptLoaded,
      setSearchResultCoordinates,
    }),
    [
      isGoogleScriptLoaded,
      setIsGoogleScriptLoaded,
      searchResultCoordinates,
      setSearchResultCoordinates,
      footerHeight,
      setFooterHeight,
      navigationHeight,
      setNavigationHeight,
    ],
  );

  return <StoreContext.Provider value={memoedValue}>{children}</StoreContext.Provider>;
};

type UseStore = () => ContextValue;

export const useStore: UseStore = () => useContext(StoreContext);
