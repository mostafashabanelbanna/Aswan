// import React, { useState, useEffect, createRef } from "react";

// const useAudio = (url) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(true);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   }, [playing]);

//   // let aud = React.findDOMNode(this.refs.audio).value;

//   useEffect(() => {
//     audio.addEventListener("ended", () => setPlaying(false));
//     return () => {
//       audio.removeEventListener("ended", () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

// const Player = () => {
//   const audioRef = createRef();
//   const url = "/audio/160547144-epic-egyptian-middle-eastern-a.wav";
//   const [playing, toggle] = useAudio(url);
//   const audioID = Array.from(document.getElementsByClassName("audioID"));

//   function myFunction() {
//     document.getElementsByClassName("audio").click();
//   }

//   return (
//     <div>
//       <button
//         ref={audioRef}
//         className="audioID"
//         onLoad={myFunction}
//         onClick={toggle}
//       >
//         {playing ? "Pause" : "Play"}
//       </button>
//     </div>
//   );
// };

// export default Player;

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

//////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import { useAudioPlayer, AudioPlayerProvider } from "react-use-audio-player";

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

//detect chrome browser

// let isChrome =
//   /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// if (!isChrome) {
//   $("#iframeAudio").remove();
// } else {
//   $("#playAudio").remove(); // just to make sure that it will not have 2x audio in the background
// }

const AudioPlayerProv = () => {
  const [Playing, setPlaying] = useState(false);
  let audio;

  document.addEventListener("click", musicPlay);
  function musicPlay() {
    document.getElementById("playAudio").play();
    document.removeEventListener("click", musicPlay);
  }

  useEffect(() => {
    setPlaying(true);
    if (Playing) {
      audio = document.getElementById("playAudio");
      audio.play();
    }
  }, [Playing]);

  if (Playing)
    return (
      <audio
        id="playAudio"
        src="/audio/160547144-epic-egyptian-middle-eastern-a.wav"
        autoPlay
        loop
      ></audio>
    );
  return <div>no way</div>;
};

export default AudioPlayerProv;
