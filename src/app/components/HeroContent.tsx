import React from "react";

interface HeroContentProps {
  children: React.ReactNode;
}

export default function HeroContent({ children }: HeroContentProps) {
  return (
    <>
      <div className="flex-1 flex flex-col items-start gap-4 xl:py-44 md:py-40 py-32">
        {children}
      </div>
    </>
  );
}
