"use client";
import { motion } from "framer-motion";

interface DraggableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function DraggableImage({ src, alt, className }: DraggableImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute cursor-grab ${className || ""}`}
      drag
      dragElastic={0.2}
      dragMomentum={false}
      dragConstraints={{ top: 0, left: 0, right: 300, bottom: 100 }}
      whileTap={{ cursor: "grabbing" }}
    />
  );
}
