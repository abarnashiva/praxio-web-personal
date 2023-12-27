import React from "react";

interface FutureContentProps {
  children: React.ReactNode;
}

export default function FlexFuture({ children }: FutureContentProps) {
  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap gap-20 mt-4 lg:px-6">{children}</div>
    </>
  );
}
