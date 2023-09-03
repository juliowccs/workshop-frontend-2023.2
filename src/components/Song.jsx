/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from 'react';

export default function Song() {
  const audioRef = useRef();
  const [play, setPlay] = useState(false);

  // Play e pause na música junto do volume
  function playSong() {
    audioRef.current.volume = 0.1;
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  }

  return (
    <div>
      <audio ref={audioRef}>
        <source src="songs/imperial.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={playSong}><img className='bg-zinc-200 w-16 p-1 rounded' src='images/vader.png'></img></button>
    </div>
  );
};
