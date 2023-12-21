import React from "react";

interface CardContentProps {
  children: React.ReactNode;
}

export default function FlexContent({ children }: CardContentProps) {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-16">{children}</div>
    </>
  );
}
