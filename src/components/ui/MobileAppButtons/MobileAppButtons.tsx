import Image from 'next/image';
import { AppButtonsContainer } from './MobileAppButtons.styles';

export default function MobileAppButtons() {
  const appStoreLink = 'https://apps.apple.com/us/app/orange-leaf-app/id6736838364';
  const googlePlayLink = 'https://play.google.com/store/apps/details?id=com.orangeleaf.android.app';
  return (
    <AppButtonsContainer>
      <a href={appStoreLink}>
        <Image src={'/images/AppStoreButton.png'} alt={'appStoreButton'} width={195} height={60} />
      </a>
      <a href={googlePlayLink}>
        <Image src={'/images/GooglePlayButton.png'} alt={'googlePlayButton'} width={195} height={60} />
      </a>
    </AppButtonsContainer>
  );
}
