import React from "react";
import { Arrow } from ".";
interface CardProps {
  header?: React.ReactNode;
  imgSrc?: React.ReactNode;
  content?: React.ReactNode;
}

export default function Card({ header, imgSrc, content }: CardProps) {
  return (
    <div className="h-auto">
      <div
        className={`relative card p-5 bg-white shadow-md h-full transition-transform duration-500 ease-linear cursor-pointer hover:shadow-lg `}
      >
        <div>
          <div className={`transition-all`}>
            <div className="m-auto">{imgSrc}</div>
            <div className="flex my-4">
              <div className="font-semibold">{header}</div>
              <div className="icon w-[1rem] ms-3">
                <Arrow fill="#ed1f24cc" />
              </div>
            </div>
          </div>
          <div className="text-gray-700">{content}</div>
        </div>
      </div>
    </div>
  );
}
