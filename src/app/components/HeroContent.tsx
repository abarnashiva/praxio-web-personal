import React from "react";

interface HeroContentProps {
  children: React.ReactNode;
}

export default function HeroContent({ children }: HeroContentProps) {
  return (
    <>
      <div className="flex-1 flex flex-col items-start gap-4 lg:py-24 py-6">
        {children}
      </div>
    </>
  );
}
