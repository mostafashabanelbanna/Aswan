// import ReactAudioPlayer from "react-audio-player";

// const AudioPlayer = () => {
//   return (
//     <ReactAudioPlayer
//       src="/audio/160547144-epic-egyptian-middle-eastern-a.wav"
//       autoPlay
//       controls
//       loop
//     />
//   );
// };

// export default AudioPlayer;

import useSound from "use-sound";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
const AudioPlayer = () => {
  const soundUrl = "/audio/160547144-epic-egyptian-middle-eastern-a.wav";

  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

  const [isHovering, setIsHovering] = React.useState(false);

  window.onload = play();
  return (
    <Button
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
      isHovering={isHovering}
    >
      Hover over me
    </Button>
  );
};

export default AudioPlayer;

// const useAudio = (url) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(true);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     const resolver = async () => {
//       await audio.play();
//     };

//     resolver();
//     // playing ? audio.play() : audio.pause();
//   }, []);

//   //   useEffect(() => {
//   //     audio.addEventListener("ended", () => setPlaying(false));
//   //     return () => {
//   //       audio.removeEventListener("ended", () => setPlaying(false));
//   //     };
//   //   }, []);

//   return [playing, toggle];
// };

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(
//     "/audio/160547144-epic-egyptian-middle-eastern-a.wav"
//   );

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

// export default Player;

// import React, { useEffect, useState } from "react";
// import { useAudioPlayer } from "react-use-audio-player";
// import { AudioPlayerProvider } from "react-use-audio-player";

// const AudioPlayer = ({ file }) => {
//   const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
//     src: file,
//     format: "wav",
//     autoplay: true,
//     html5: true,
//   });

//   useEffect(() => {
//     togglePlayPause();
//   }, []);

//   if (!ready && !loading) return <div>No audio to play</div>;
//   if (loading) return <div>Loading audio</div>;

//   return (
//     <div>
//       <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

// const AudioPlayerProv = () => {
//   return (
//     <AudioPlayerProvider>
//       <AudioPlayer file="/audio/160547144-epic-egyptian-middle-eastern-a.wav" />
//     </AudioPlayerProvider>
//   );
// };

// export default AudioPlayerProv;
