import { Practice } from "@/constants";
import React, { useRef, useState } from "react";
import { PracticeIcon } from "../Icons";

type Props = {
  practice: Practice;
  index: number;
};

const PracticeCard = ({ practice, index }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-3xl p-8 flex flex-col gap-4 bg-white/2 border border-white/10 shadow-[0px_25px_50px_-12px_#00000040] relative overflow-hidden"
    >
      <div
        className={`opacity-0 group-hover:opacity-60 absolute inset-0 backdrop-blur-[48px] rounded-[24px] transition-all duration-300 z-10 ${
          // gradientByIndex[index % 4]
          ""
        }`}
        style={{
          opacity: hovered ? 1 : 0,
          background: `
            radial-gradient(
              1200px circle at ${position.x}px ${position.y}px,
              rgba(217,130,47,0.15),
              rgba(217,130,47,0.05) 30%,
              transparent 70%
            )
          `,
        }}
      />

      <div className="flex flex-row md:flex-col gap-4 items-start z-20">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/3 border border-white/8 ">
          <PracticeIcon
            index={index}
            className="text-white/50 group-hover:text-white transition-all duration-300"
            width={24}
            height={24}
          />
        </div>

        <h3 className="font-semibold text-2xl leading-8 tracking-[-0.6px]">
          {practice.name}
        </h3>
      </div>

      <div className="flex flex-row flex-wrap gap-x-2.5 gap-y-4 items-center z-20">
        {practice.items.map((item, i) => (
          <div
            key={i}
            className="px-4 py-2 rounded-full bg-white/3 border border-white/10 flex items-center justify-center"
          >
            <span className="text-[10px] font-bold tracking-widest text-center uppercase text-white/50 group-hover:text-white transition-all duration-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeCard;
