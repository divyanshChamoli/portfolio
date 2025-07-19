import { motion, MotionValue, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  position: { top: number; left: number };
  depth: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  width?: number;
  height?: number;
}

export function ParallaxImage({
  src,
  position,
  depth,
  springX,
  springY,
  // width,
  // height,
}: ParallaxImageProps) {
  const imageX = useTransform(springX, (v) => `${-v * depth}px`);
  const imageY = useTransform(springY, (v) => `${-v * depth}px`);

  return (
    <motion.img
      src={src}
      alt=""
      className={`absolute w-[40px] sm:w-[50px] md:w-[60px] lg:w-[72px]  `}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        x: imageX,
        y: imageY,
        filter: `contrast(110%)`,
        // width: width ? `${width * 4}px` : "",
        // height: height ? `${height * 4}px` : "",
        transform: `scale(${1 + depth / 100})`,
      }}
    />
  );
}
