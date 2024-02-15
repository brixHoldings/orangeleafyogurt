'use client';
import Button from '@components/pages/OrangeLeaf/common/Button';

import {
  Container,
  PlayButton,
  PlayCircle,
  PlayIndicator,
  VideoContainer,
  VideoOverlayContainer,
  VideoOverlayContent,
  VideoOverlayQuote,
  VideoOverlayTitle,
} from './VideoSection.styles';
import useVideoSection from './useVideoSection.hook';

import type { FC } from 'react';
import { FranchisingVideoSlice } from 'prismicio-types';

const VideoSection: FC<{ slice: FranchisingVideoSlice }> = ({
  slice: {
    primary: { title, text, button },
  },
}) => {
  const { handlePlayVideo, isVideoPlaying, videoRef, onPause, onPlay } = useVideoSection();

  return (
    <Container isVideoPlaying={isVideoPlaying}>
      <VideoContainer>
        <PlayButton isVideoPlaying={isVideoPlaying} onClick={handlePlayVideo}>
          <PlayIndicator fill="none" height="58" viewBox="0 0 45 58" width="45" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42.9595 25.8361C45.2837 27.4244 45.2837 30.8528 42.9595 32.4411L7.11077 56.9399C4.45587 58.7543 0.853875 56.8531 0.853875 53.6374L0.853877 4.63977C0.853878 1.42413 4.45588 -0.477048 7.11078 1.33729L42.9595 25.8361Z"
              fill="white"
            />
          </PlayIndicator>
          <PlayCircle fill="none" height="129" viewBox="0 0 129 129" width="129" xmlns="http://www.w3.org/2000/svg">
            <circle cx="64.5" cy="64.5" r="62.5" stroke="white" strokeWidth="4" />
          </PlayCircle>
        </PlayButton>
        <video
          ref={videoRef}
          height="auto"
          poster="/images/Orange-leaf-first.jpeg"
          width="100%"
          controls
          onPause={onPause}
          onPlay={onPlay}
        >
          <track kind="captions" />
          <source src="/videos/NP DIGITAL CO Orangle Leaf Testimonial-.mp4" type="video/mp4" />
        </video>
      </VideoContainer>
      <VideoOverlayContainer isVideoPlaying={isVideoPlaying}>
        <VideoOverlayContent>
          <VideoOverlayTitle dangerouslySetInnerHTML={{ __html: title as string }}></VideoOverlayTitle>
          <VideoOverlayQuote dangerouslySetInnerHTML={{ __html: text as string }}></VideoOverlayQuote>
          <a href="#contact">
            <Button label={button as string} size="s" variant="outlined-inverted" />
          </a>
        </VideoOverlayContent>
      </VideoOverlayContainer>
    </Container>
  );
};

export default VideoSection;
