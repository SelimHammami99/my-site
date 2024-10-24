"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Badge } from "./ui/badge";

export default function AnimatedCard({
  title,
  description,
  image,
  badge,
}: {
  title: string;
  description: string;
  image: string;
  badge: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      className="relative w-full rounded-2xl border border-zinc-900 hover:cursor-pointer overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 p-3">
        <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
          <Image
            src={image}
            alt="Blog thumbnail"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex flex-row justify-between">
            <p className="text-sm dark:text-gray-300">{title}</p>
            <Badge
              className={`${
                badge === "Live" ? "bg-green-600" : "bg-red-500"
              } text-white font-light py-0.5 px-1.5 rounded-lg `}
            >
              {badge}
            </Badge>
          </div>
          <p className="text-xs dark:text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
