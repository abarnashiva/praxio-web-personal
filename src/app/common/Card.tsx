import React from "react";
import { Arrow } from ".";
interface CardProps {
  header?: React.ReactNode;
  imgSrc?: React.ReactNode;
  content?: React.ReactNode;
  small?: boolean;
}

export default function Card({ header, imgSrc, content, small }: CardProps) {
  const smallAlign = small ? "min-h-[400px]" : "";

  return (
    <div className="md:w-4/12">
      <div
        className={`relative mx-auto card p-5 w-auto bg-white shadow-md transition-transform duration-500 ease-linear cursor-pointer hover:shadow-lg ${!smallAlign && "min-h-[520px]" } ${smallAlign}`}
      >
        <div>
          <div className={`transition-all`}>
            <div>{imgSrc}</div>
            <div className="flex my-4">
              <div className="font-semibold">{header}</div>
              <div className="icon w-[1rem] ms-3">
                <Arrow fill="#ed1f24cc" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 leading-relaxed">{content}</div>
        </div>
      </div>
    </div>
  );
}
