import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = (props) => {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <ReactPlayer 
        url= {props.vidUrl}
        controls
        playing={playing}
        width='100%'
        height='100%'
        
        // onReady={() => console.log('Player is ready')}
        // onPlay={() => console.log('Video is playing')}
        // onPause={() => console.log('Video is paused')}
        // onEnded={() => console.log('Video has ended')}
      />
      
      <button 
        type='button'
        className="btn btn-primary"
        onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
