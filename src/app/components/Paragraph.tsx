import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  large?: boolean;
  whiteText?: boolean;
  footerText?: boolean;
}

export default function Paragraph({ children, large, whiteText, footerText }: ParagraphProps) {
  const words = React.Children.toArray(children).join(" ").split(" ");
  const defaultText = large
    ? "text-lg"
    : whiteText
    ? "text-white text-center py-4"
    : footerText
    ? "text-white leading-7"
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
