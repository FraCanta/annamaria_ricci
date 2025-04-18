import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VerticalAnimatedLine = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={`w-[1.4px] h-full bg-gray90/50 ${className}`}
      initial={{ height: 0 }}
      animate={isInView ? { height: "100%" } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};

export default VerticalAnimatedLine;
