import React from "react";

interface HeroTextProps {
  children: React.ReactNode;
}

export default function HeroText({ children }: HeroTextProps) {
  return (
    <>
      <text className="text-lg font-semibold opacity-75">
        {children}
      </text>
    </>
  );
}
