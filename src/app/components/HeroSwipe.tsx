import React from "react";

interface HeroSwipeProps {
  children: React.ReactNode;
}

export default function HeroSwipe({ children }: HeroSwipeProps) {
  return (
    <div className="w-full bg-red-100">
      <div className="w-full container p-6">{children}</div>
    </div>
  );
}
