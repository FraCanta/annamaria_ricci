import { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getSound = async () => {
    if (soundRef.current) return soundRef.current;

    const { Howl } = await import("howler");
    soundRef.current = new Howl({
      src: ["/audio/nuvole_bianche.mp3"],
      loop: true,
      volume: 0.02,
      preload: false,
    });

    return soundRef.current;
  };

  useEffect(() => {
    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const toggle = async () => {
    const sound = await getSound();
    if (isPlaying) {
      sound.pause();
      setIsPlaying(false);
    } else {
      sound.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
