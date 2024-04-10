import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  center?: boolean;
  margin?: boolean;
  green?: boolean;
}

export default function Heading({
  children,
  center,
  margin,
  green,
}: HeadingProps) {
  const textAlignClass = center ? "text-center" : "";
  const marginAlign = margin ? "my-7 pb-4" : "";
  const greentext = green
    ? "text-secondary lg:text-4xl hover:cursor-pointer"
    : "text-primary";

  return (
    <h1
      className={`font-semibold text-3xl ${textAlignClass} ${marginAlign} ${greentext}`}
    >
      {children}
    </h1>
  );
}
