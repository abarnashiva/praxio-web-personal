import React from "react";

interface IconsProps {
  children: React.ReactNode;
}

export default function Icons({ children }: IconsProps) {
  return (
    <>
      <div className="text-2xl text-gray-700 py-4">{children}</div>
    </>
  );
}
