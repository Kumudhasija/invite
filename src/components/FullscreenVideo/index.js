import React, { useRef, useState } from 'react';
import './index.css';
import FloatingSkipButton from '../SkipButton';

const FullscreenVideo = ({ video, onEnded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsMuted(false);
    videoRef.current.play(); // Play the video when button is clicked
  };


  return (
    <div className="fullscreen-video-container">
      {isPlaying && <FloatingSkipButton onSkip={onEnded} />}
      <video
        ref={videoRef}
        className="fullscreen-video"
        // autoPlay
        // loop
        muted={isMuted}
        onEnded={onEnded}
        // onPlay={() => setTimeout(() => {
        //   setIsMuted(false);
        // }, 1000)}
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button onClick={handlePlay} className="play-button">
          Play
        </button>
      )}
    </div>
  );
};

export default FullscreenVideo;