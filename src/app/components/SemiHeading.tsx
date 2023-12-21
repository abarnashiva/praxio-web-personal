import React from "react";

interface SemiheadingProps {
  children: React.ReactNode;
}

export default function SemiHeading({ children }: SemiheadingProps) {
  return <p className="text-primary font-bold text-lg py-3">{children}</p>;
}
