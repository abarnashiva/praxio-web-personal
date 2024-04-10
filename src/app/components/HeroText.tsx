import React from "react";

interface HeroTextProps {
  children: React.ReactNode;
  white?: boolean;
}

export default function HeroText({ children, white }: HeroTextProps) {
  const whiteText = white ? "text-white" : ""
  return (
    <>
      <text className={`text-xl font-semibold text-banner ${whiteText}`}>
        {children}
      </text>
    </>
  );
}
