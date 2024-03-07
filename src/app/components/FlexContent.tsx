import React from "react";

interface CardContentProps {
  children: React.ReactNode;
  normal?: boolean;
  support?: boolean;
}

export default function FlexContent({
  children,
  normal,
  support,
}: CardContentProps) {
  const defaultFlex = normal
    ? "grid gap-2"
    : support
    ? "grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-x-40 lg:gap-y-10"
    : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-x-20";

  return (
    <>
      <div className={`${defaultFlex}`}>{children}</div>
    </>
  );
}
