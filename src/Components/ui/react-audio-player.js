import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

<<<<<<< HEAD
///////////////////////////////////////////////////////////
=======
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const url = "/audio/160547144-epic-egyptian-middle-eastern-a.wav";
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;

// import useSound from "use-sound";
// import { Button } from "react-bootstrap";
// import React, { useState, useEffect } from "react";
// const AudioPlayer = () => {
//   const soundUrl = "/audio/160547144-epic-egyptian-middle-eastern-a.wav";

//   const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

//   const [isHovering, setIsHovering] = React.useState(false);

//   window.onload = play();
//   return (
//     <Button
//       onMouseEnter={() => {
//         setIsHovering(true);
//         play();
//       }}
//       onMouseLeave={() => {
//         setIsHovering(false);
//         stop();
//       }}
//       isHovering={isHovering}
//     >
//       Hover over me
//     </Button>
//   );
// };
>>>>>>> b99b80df1371cb358f4e87c6a36299a3fa3489df

// export default AudioPlayer;

// import React, { useState, useEffect } from "react";

// const useAudio = url => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//       playing ? audio.play() : audio.pause();
//     },
//     [playing]
//   );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

// export default Player;

import React, { useEffect, useState } from "react";
import { useAudioPlayer, AudioPlayerProvider } from "react-use-audio-player";

const AudioPlayer = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: "wav",
    autoplay: true,
    html5: true,
  });

  useEffect(() => {
    togglePlayPause();
  }, []);

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <div>
      <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

const AudioPlayerProv = () => {
  const [Playing, setPlaying] = useState(false);
  let aud;

  useEffect(() => {
    setPlaying(true);
    if (Playing) {
      aud = document.getElementById("aud");
      aud.play();
    }
  }, [Playing]);

  if (Playing)
    return (
      // <AudioPlayerProvider>
      //   <AudioPlayer file="/audio/160547144-epic-egyptian-middle-eastern-a.wav" />
      // </AudioPlayerProvider>
      <audio
        id="aud"
        controls
        src="/audio/160547144-epic-egyptian-middle-eastern-a.wav"
        autoplay
        loop
        html5
      ></audio>
    );
  return <div>no way</div>;
};

export default AudioPlayerProv;
