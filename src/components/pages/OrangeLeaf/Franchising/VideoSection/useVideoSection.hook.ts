import { useCallback, useState, useRef } from 'react';

import type { RefObject, MouseEventHandler, ReactEventHandler } from 'react';

type UseVideoSection = () => {
  onPlay: ReactEventHandler<HTMLVideoElement>;
  onPause: ReactEventHandler<HTMLVideoElement>;
  handlePlayVideo: MouseEventHandler<HTMLButtonElement | HTMLDivElement | HTMLVideoElement>;
  isVideoPlaying: boolean;
  videoRef: RefObject<HTMLVideoElement>;
};

const useVideoSection: UseVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    event.stopPropagation();

    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const onPause: ReactEventHandler<HTMLVideoElement> = useCallback(() => {
    setIsVideoPlaying(false);
  }, [setIsVideoPlaying]);

  const onPlay: ReactEventHandler<HTMLVideoElement> = useCallback(() => {
    setIsVideoPlaying(true);
  }, [setIsVideoPlaying]);

  return { onPause, onPlay, handlePlayVideo, isVideoPlaying, videoRef };
};

export default useVideoSection;
