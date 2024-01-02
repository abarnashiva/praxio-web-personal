import React from "react";

interface FlexAddressProps {
  children: React.ReactNode;
}

export default function FlexAddress({ children }: FlexAddressProps) {
  return (
    <>
      <div className="grid gap-2">{children}</div>
    </>
  );
}
