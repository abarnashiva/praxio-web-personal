import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  center?: boolean;
  margin?: boolean;
}

export default function Heading({ children, center, margin }: HeadingProps) {
  const textAlignClass = center ? "text-center" : "";
  const marginAlign = margin ? "my-7 pb-4" : "";

  return (
    <h1
      className={`text-primary font-semibold text-3xl pt-4 ${textAlignClass} ${marginAlign}`}
    >
      {children}
    </h1>
  );
}
