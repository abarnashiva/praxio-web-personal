import React from "react";

interface HeroSwipeProps {
  children: React.ReactNode;
}

export default function HeroSwipe({ children }: HeroSwipeProps) {
  return (
    <>
      <div className="w-full bg-red-100 p-7">{children}</div>
    </>
  );
}
