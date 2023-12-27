import React from "react";

interface SubheadingProps {
  children: React.ReactNode;
  whiteText?: boolean;
}

export default function SubHeading({ children, whiteText }: SubheadingProps) {
  const whiteTexts = whiteText
    ? "text-white text-2xl font-medium mb-6"
    : "text-primary py-6 text-2xl font-semibold";
    
  return <h2 className={`${whiteTexts}`}>{children}</h2>;
}
