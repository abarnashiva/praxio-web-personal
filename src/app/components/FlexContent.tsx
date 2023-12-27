import React from "react";

interface CardContentProps {
  children: React.ReactNode;
  normal?: boolean;
}

export default function FlexContent({ children, normal }: CardContentProps) {
  const defaultFlex = normal
    ? "grid gap-2"
    : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-x-20";

  return (
    <>
      <div className={`${defaultFlex}`}>{children}</div>
    </>
  );
}
