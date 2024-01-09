import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `SharePhotos`.
 */
export type SharePhotosProps = SliceComponentProps<Content.SharePhotosSlice>;

/**
 * Component for "SharePhotos" Slices.
 */
const SharePhotos = ({ slice }: SharePhotosProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for share_photos (variation: {slice.variation}) Slices
    </section>
  );
};

export default SharePhotos;
