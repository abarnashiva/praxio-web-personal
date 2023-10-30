import React from "react";
import { Arrow } from ".";
interface CardProps {
  header?: React.ReactNode;
  imgSrc?: React.ReactNode;
  content?: React.ReactNode;
}

export default function Card({ header, imgSrc, content }: CardProps) {
  return (
    <div>
      <div className="relative mx-auto card max-w-full md:max-w-[22em] p-5 bg-white shadow-md transition-transform duration-500 ease-linear cursor-pointer hover:shadow-lg">
        <div>
          <div className={`transition-all`}>
            <div>{imgSrc}</div>
            <div className="flex my-3">
              <div>{header}</div>
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
