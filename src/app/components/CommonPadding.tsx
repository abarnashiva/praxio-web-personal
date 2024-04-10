import React from "react";

interface CommonPaddingProps {
  children: React.ReactNode;
}

export default function CommonPadding({ children }: CommonPaddingProps) {

  return (
    <>
      <div className="pt-8">
        {children}
      </div>
    </>
  );
}
