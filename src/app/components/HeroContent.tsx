import React from "react";

interface HeroContentProps {
  children: React.ReactNode;
}

export default function HeroContent({ children }: HeroContentProps) {
  return (
    <>
      <div className="flex-1 flex flex-col min-w-[20rem] items-start gap-4 py-24 px-7">{children}</div>
    </>
  );
}
