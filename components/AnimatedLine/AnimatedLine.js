import { useRef } from "react";
import { motion } from "framer-motion";

const AnimatedLine = ({ className = "" }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={`h-[1.5px] bg-gray90 ${className}`}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};

export default AnimatedLine;
