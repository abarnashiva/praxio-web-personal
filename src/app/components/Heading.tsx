import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  center?: boolean;
  margin?: boolean;
  black?: boolean;
}

export default function Heading({ children, center, margin, black }: HeadingProps) {
  const textAlignClass = center ? "text-center" : "";
  const marginAlign = margin ? "my-7 pb-4" : "";
  const blacktext = black
    ? "text-black text-1xl hover:cursor-pointer"
    : "text-primary";

  return (
    <h1
      className={`font-semibold text-3xl ${textAlignClass} ${marginAlign} ${blacktext}`}
    >
      {children}
    </h1>
  );
}
