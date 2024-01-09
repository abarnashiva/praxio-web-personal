import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  large?: boolean;
  whiteText?: boolean;
  footerText?: boolean;
  contact?: boolean;
  swiper?: boolean;
}

export default function Paragraph({ children, large, whiteText, footerText, contact, swiper }: ParagraphProps) {
  const words = React.Children.toArray(children).join(" ").split(" ");
  const defaultText = large
    ? "text-lg py-4"
    : whiteText
    ? "text-white text-center py-4"
    : footerText
    ? "text-white leading-7"
    : contact
    ? "leading-7"
    : swiper
    ? "hover:cursor-pointer py-2"
    : "text-gray-700 py-4";

  return (
    <p className={`${defaultText}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`${word === "PRAXIO" ? "font-semibold" : ""}`}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
