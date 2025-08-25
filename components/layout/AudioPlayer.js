import { useAudio } from "@/context/AudioContext";

const AudioPlayer = () => {
  const { isPlaying, toggle } = useAudio();

  return (
    <div
      onClick={toggle}
      className="fixed bottom-8 left-8 lg:bottom-10 lg:left-10 flex items-center cursor-pointer z-50 select-none"
    >
      <div className="flex items-end space-x-1 w-5 h-5 mr-2">
        {[1, 2, 3, 4, 5].map((bar, i) => (
          <span
            key={i}
            className={`w-0.5 bg-purple100 rounded-sm ${
              isPlaying ? `animate-wave animation-delay-${i}` : `h-2.5`
            }`}
            style={{
              height: isPlaying ? "100%" : "10px",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
      <span className="text-gray90 text-sm font-work font-medium tracking-wide">
        {isPlaying ? "SOUND ON" : "SOUND OFF"}
      </span>
    </div>
  );
};

export default AudioPlayer;
