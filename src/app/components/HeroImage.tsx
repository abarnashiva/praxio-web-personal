import React from "react";

interface HeroImageProps {
  source: string;
}

export default function HeroImage({ source }: HeroImageProps) {
  return (
    <>
      <div className="flex-1 flex min-w-[20rem] h-[clamp(25rem,_60vw,_700px)]">
        <img src={source} className="object-fit w-full my-4" />
      </div>
    </>
  );
}
