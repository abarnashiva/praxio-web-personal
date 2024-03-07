import React from "react";

interface ContainerBoxProps {
  children: React.ReactNode;
}

export default function ContainerBox({ children }: ContainerBoxProps) {
  return (
    <>
      <div className="container w-full px-6 pt-6">{children}</div>
    </>
  );
}
