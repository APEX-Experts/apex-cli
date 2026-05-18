import { useState, useRef, MouseEvent } from "react";

export function useMouseGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<T>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return {
    ref,
    position,
    isHovered,
    setIsHovered,
    handleMouseMove,
    glowProps: {
      onMouseMove: handleMouseMove,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
  };
}
