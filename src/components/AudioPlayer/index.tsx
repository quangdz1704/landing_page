// import AudioPlayer from "react-audio-player";
import { useEffect, useRef, useState } from "react";
import biw from "../../assets/biw.mp3";

const Audio = ({
  readyPlay,
  controls,
}: {
  readyPlay?: boolean;
  controls?: boolean;
}) => {
  const audioPlayer = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(!!readyPlay);

  const playAudio = () => {
    const audioElm = audioPlayer.current;
    // document.getElementById("backgroundMusic") as HTMLAudioElement | null;

    audioElm?.play().catch((error: any) => {
      console.log("error", error);
      document.addEventListener(
        "click", // only click event >> DOMException: play() failed because the user didn't interact with the document first.
        () => {
          console.log("add event to play");
          audioElm?.play();
        },
        { once: true }
      );
    });
  };

  useEffect(() => {
    // playAudio();
  }, []);

  useEffect(() => {
    if (readyPlay) {
      audioPlayer.current.play();
    } else {
      // audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
      // audioPlayer.current.load();
      audioPlayer.current.pause();
    }
  }, [readyPlay]);

  return (
    <div>
      <audio
        ref={audioPlayer}
        autoPlay
        controls={controls}
        loop
        id="backgroundMusic"
      >
        <source src={biw} />
      </audio>
    </div>
  );
};

export default Audio;
