import { useEffect, useState } from "react";
import { Howl } from "howler";
import { Icon } from "@iconify/react";

const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Parte da "off"

  useEffect(() => {
    const newSound = new Howl({
      src: ["/audio/nuvole_bianche.mp3"],
      loop: true,
      volume: 0.04,
    });

    newSound.once("play", () => {
      console.log("🎵 Autoplay riuscito");
      setIsPlaying(true);
    });

    newSound.once("playerror", (id, err) => {
      console.warn("🚫 Autoplay bloccato", err);
    });

    newSound.play(); // Non è async, ma triggera gli eventi sopra
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, []);

  const toggleSound = () => {
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
    <div
      onClick={toggleSound}
      className="fixed bottom-8 left-8 lg:bottom-10 lg:left-10 flex items-center cursor-pointer z-50 select-none"
    >
      <div className="flex items-end space-x-1 w-5 h-5 mr-2">
        {[1, 2, 3, 4, 5].map((bar, i) => (
          <span
            key={i}
            className={`w-0.5 bg-purple-500 rounded-sm ${
              isPlaying ? `animate-wave animation-delay-${i}` : `h-2.5`
            }`}
            style={{
              height: isPlaying ? "100%" : "10px",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
      <span className="text-gray-600 text-sm font-medium tracking-wide">
        {isPlaying ? "SOUND ON" : "SOUND OFF"}
      </span>
    </div>
  );
};

export default AudioPlayer;
