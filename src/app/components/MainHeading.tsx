import React from "react";

interface MainHeadingProps {
  children: React.ReactNode;
}

export default function MainHeading({ children }: MainHeadingProps) {
  return (
    <h1 className="lg:text-4xl md:text-4xl text-2xl text-primary font-semibold pt-4">{children}</h1>
  );
}