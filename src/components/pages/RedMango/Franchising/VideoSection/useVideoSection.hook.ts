import { useCallback, useState, useRef } from 'react';

import type { RefObject, MouseEventHandler } from 'react';

type UseVideoSection = () => {
  handlePauseVideo: MouseEventHandler<HTMLButtonElement | HTMLDivElement | HTMLVideoElement>;
  handlePlayVideo: MouseEventHandler<HTMLButtonElement | HTMLDivElement | HTMLVideoElement>;
  isVideoPlaying: boolean;
  videoRef: RefObject<HTMLVideoElement>;
};

const useVideoSection: UseVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.stopPropagation();

      if (videoRef.current) {
        if (isVideoPlaying) {
          setIsVideoPlaying(false);
          videoRef.current.pause();
        } else {
          setIsVideoPlaying(true);
          void videoRef.current.play();
        }
      }
    },
    [isVideoPlaying],
  );

  const handlePauseVideo: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    event.stopPropagation();

    if (videoRef.current) {
      setIsVideoPlaying(false);
      videoRef.current.pause();
    }
  }, []);

  return { handlePauseVideo, handlePlayVideo, isVideoPlaying, videoRef };
};

export default useVideoSection;
