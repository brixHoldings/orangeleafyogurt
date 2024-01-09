import MenuSection from '@components/pages/OrangeLeaf/Menu/MenuSection/MenuSection';

import type { FC } from 'react';
import { createClient } from 'prismicio';
import { MenuHeaderSlice } from 'prismicio-types';

export const metadata = {
  title: 'Menu | Orange Leaf Frozen Yogurt',
};

/* @ts-expect-error Server Component */
const Menu: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('menu');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'menu_header') as
    | MenuHeaderSlice
    | undefined;

  return headerSlice ? <MenuSection slice={headerSlice} /> : null;
};

export default Menu;
