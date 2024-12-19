import React from "react";

interface NumberProps {
  children: React.ReactNode;
}

export default function NumberUnFill({ children }: NumberProps) {
  return <p className="text-fill font-medium text-5xl">{children}</p>;
}
