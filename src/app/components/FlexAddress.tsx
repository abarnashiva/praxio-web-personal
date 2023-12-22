import React from "react";

interface FlexAddressProps {
  children: React.ReactNode;
}

export default function FlexAddress({ children }: FlexAddressProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">{children}</div>
    </>
  );
}
