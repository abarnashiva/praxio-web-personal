import React from "react";

interface SemiheadingProps {
  children: React.ReactNode;
  whiteText?: boolean;
  top?: boolean;
  bottom?: boolean;
  both?: boolean;
}

export default function SemiHeading({
  children,
  whiteText,
  top,
  bottom,
  both
}: SemiheadingProps) {
  const whiteTexts = whiteText
    ? "text-white text-lg font-medium mb-6"
    : top
    ? "text-primary font-bold text-lg pt-10 pb-3"
    : bottom
    ? "text-primary font-bold text-lg pb-10 pt-3"
    : both
    ? "text-primary font-bold text-lg py-10"
    : "text-primary font-bold text-lg py-3";

  return <p className={`${whiteTexts}`}>{children}</p>;
}
