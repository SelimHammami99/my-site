"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

export default function BlogAnimatedCard({
  title,
  description,
  icon,
  date,
  link,
}: {
  title: string;
  description: string;
  icon: string;
  date: string;
  link: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    }
  }

  const navigateTo = (link: string) => {
    router.push(`/blogs${link}`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      onClick={() => navigateTo(link)}
      className="relative w-full rounded-2xl border border-zinc-900 hover:cursor-pointer overflow-hidden "
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
        <div className="flex flex-col gap-1">
          <div className="flex flex-col justify-around items-start gap-2">
            <div className="flex flex-row justify-center items-center">
              <img src={icon} alt="nextjs" className="w-4 h-4 mr-2" />
              <p className="text-sm dark:text-gray-300">{title}</p>
            </div>

            <p className="text-xs dark:text-gray-400">{description}</p>
            <Badge
              variant={"outline"}
              className="text-xs font-light dark:text-gray-400"
            >
              {date}
            </Badge>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
