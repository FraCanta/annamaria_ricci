import { useEffect, useRef, useState } from "react";

export default function FullscreenVideo({ src }) {
  return (
    <div className="w-full  max-h-[90svh] h-[60svh] relative">
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
