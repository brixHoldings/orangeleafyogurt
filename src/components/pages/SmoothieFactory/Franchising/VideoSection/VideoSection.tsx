import {
  Container,
  PauseButton,
  PauseCircle,
  PauseIndicator1,
  PauseIndicator2,
  PlayButton,
  PlayCircle,
  PlayIndicator,
  VideoContainer,
} from './VideoSection.styles';
import useVideoSection from './useVideoSection.hook';

import type { FC } from 'react';

const VideoSection: FC = () => {
  const { handlePauseVideo, handlePlayVideo, isVideoPlaying, videoRef } = useVideoSection();

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

        <PauseButton isVideoPlaying={isVideoPlaying} onClick={handlePauseVideo}>
          <PauseCircle fill="none" height="101" viewBox="0 0 101 101" width="101" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_102_886)">
              <circle cx="50.5" cy="45.5" r="38.5" shapeRendering="crispEdges" stroke="white" strokeWidth="4" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="101"
                id="filter0_d_102_886"
                width="101"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.105882 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_102_886" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_102_886" mode="normal" result="shape" />
              </filter>
            </defs>
          </PauseCircle>
          <PauseIndicator1 fill="none" height="56" viewBox="0 0 30 56" width="30" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_102_890)">
              <rect fill="white" height="35.1628" rx="4" width="8.7907" x="10.7441" y="5.23267" />
              <rect height="34.1628" rx="3.5" stroke="white" width="7.7907" x="11.2441" y="5.73267" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="55.1628"
                id="filter0_d_102_890"
                width="28.7908"
                x="0.744141"
                y="0.232666"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.105882 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_102_890" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_102_890" mode="normal" result="shape" />
              </filter>
            </defs>
          </PauseIndicator1>
          <PauseIndicator2 fill="none" height="56" viewBox="0 0 30 56" width="30" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_102_891)">
              <rect fill="white" height="35.1628" rx="4" width="8.7907" x="10.4651" y="5.23267" />
              <rect height="34.1628" rx="3.5" stroke="white" width="7.7907" x="10.9651" y="5.73267" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="55.1628"
                id="filter0_d_102_891"
                width="28.7908"
                x="0.465088"
                y="0.232666"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.105882 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_102_891" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_102_891" mode="normal" result="shape" />
              </filter>
            </defs>
          </PauseIndicator2>
        </PauseButton>
        <video ref={videoRef} height="auto" onClick={handlePauseVideo} poster="/images/sf-poster.png" width="100%">
          <track kind="captions" />
          <source src="/videos/Smoothie Factory Testimonial NP DIGITAL CO_1 (1).mp4" type="video/mp4" />
        </video>
      </VideoContainer>
    </Container>
  );
};

export default VideoSection;
