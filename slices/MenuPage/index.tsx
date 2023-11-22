import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `MenuHeader`.
 */
export type MenuHeaderProps = SliceComponentProps<Content.MenuHeaderSlice>;

/**
 * Component for "MenuHeader" Slices.
 */
const MenuHeader = ({ slice }: MenuHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for menu_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default MenuHeader;
