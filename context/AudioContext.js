import { createContext, useContext, useState, useEffect } from "react";
import { Howl } from "howler";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Inizializza Howl una sola volta
  useEffect(() => {
    const newSound = new Howl({
      src: ["/audio/nuvole_bianche.mp3"],
      loop: true,
      volume: 0.02,
    });

    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const toggle = () => {
    if (!sound) return;
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
