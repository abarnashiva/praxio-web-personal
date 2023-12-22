import React from "react";

interface CardContactProps {
  children: React.ReactNode;
}

export default function FlexContact({ children }: CardContactProps) {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-10">
        {children}
      </div>
    </>
  );
}
