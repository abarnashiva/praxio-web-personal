import React from "react";

interface ProductImageProps {
  source: string;
}

export default function ProductImage({ source }: ProductImageProps) {
  return (
    <>
      <div>
        <img src={source} className="w-full" />
      </div>
    </>
  );
}
