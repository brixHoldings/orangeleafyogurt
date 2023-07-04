import Classics from '@components/pages/OrangeLeaf/Home/Classics';
import HowToOrangeLeaf from '@components/pages/OrangeLeaf/Home/HowToOrangeLeaf/HowToOrangeLeaf';
import Pill from '@components/pages/OrangeLeaf/Home/Pill';
import Promo from '@components/pages/OrangeLeaf/Home/Promo';
import SharePhotos from '@components/pages/OrangeLeaf/Home/SharePhotos';
import WhatsNew from '@components/pages/OrangeLeaf/Home/WhatsNew';

import type { FC } from 'react';

export const metadata = {
  title: 'Orange Leaf Frozen Yogurt',
};

const Home: FC = () => (
  <>
    <HowToOrangeLeaf />
    <Pill>
      <WhatsNew />
      <Classics />
    </Pill>
    <Promo />
    <SharePhotos />
  </>
);
export default Home;
