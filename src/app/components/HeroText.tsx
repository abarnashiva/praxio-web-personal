import React from "react";

interface HeroTextProps {
  children: React.ReactNode;
}

export default function HeroText({ children }: HeroTextProps) {
  return (
    <>
      <text className="text-lg font-semibold text-banner">
        {children}
      </text>
    </>
  );
}
