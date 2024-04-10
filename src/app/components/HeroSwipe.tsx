import React from "react";

interface HeroSwipeProps {
  children: React.ReactNode;
  future?: boolean;
}

export default function HeroSwipe({ children, future }: HeroSwipeProps) {

  const futures = future ? "lg:mb-24 mb-14" : "";
  return (
    <div className={`w-full bg-banner ${futures}`}>
      <div className="w-full container p-6">{children}</div>
    </div>
  );
}
