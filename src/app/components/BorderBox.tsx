import React from "react";

interface BorderBoxProps {
  children: React.ReactNode;
}

export default function BorderBox({ children }: BorderBoxProps) {
  return (
    <>
      <div className="border border-gray-300 rounded-lg p-6  mb-20">
        {children}
      </div>
    </>
  );
}
