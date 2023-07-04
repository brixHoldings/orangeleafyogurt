import Header from '@components/pages/SmoothieFactory/Home/Header/Header';
import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';

import type { FC } from 'react';

export const metadata = {
  title: 'Smoothie Factory® | A smoothie bar and nutrition supplement franchise company',
};

const Home: FC = () => (
  <>
    <Header />
    <WhatIsNew />
    <WhatIsNew />
  </>
);

export default Home;
