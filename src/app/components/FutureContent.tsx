import React from "react";

interface FutureContentProps {
  children: React.ReactNode;
}

export default function FutureContent({ children }: FutureContentProps) {
  return (
    <>
      <div className="w-full flex justify-center my-auto">{children}</div>
    </>
  );
}
