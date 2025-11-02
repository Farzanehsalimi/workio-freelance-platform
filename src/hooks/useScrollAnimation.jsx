import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export function MotionSection({
  id,
  children,
  variants,
  initialVisible = false,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={variants}
      initial={initialVisible ? "visible" : "hidden"}
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
}
