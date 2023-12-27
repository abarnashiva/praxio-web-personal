import React from "react";

interface SemiheadingProps {
  children: React.ReactNode;
  whiteText?: boolean;
}

export default function SemiHeading({ children, whiteText }: SemiheadingProps) {
  const whiteTexts = whiteText
    ? "text-white text-lg font-medium mb-6"
    : "text-primary font-bold text-lg py-3";

  return <p className={`${whiteTexts}`}>{children}</p>;
}
