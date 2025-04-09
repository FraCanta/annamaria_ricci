import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedLineView = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={`h-[0.1px] bg-gray90 ${className} `}
      initial={{ width: 0 }}
      animate={isInView ? { width: "100%" } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};

export default AnimatedLineView;
