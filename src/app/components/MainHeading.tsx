import React from "react";

interface MainHeadingProps {
  children: React.ReactNode;
}

export default function MainHeading({ children }: MainHeadingProps) {
  return (
    <h1 className="text-5xl text-primary font-semibold pt-4">{children}</h1>
  );
}