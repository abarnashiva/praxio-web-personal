import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  large?: boolean;
  whiteText?: boolean;
}

export default function Paragraph({ children, large, whiteText }: ParagraphProps) {
  const words = React.Children.toArray(children).join(" ").split(" ");
  const largeAlign = large ? "text-lg" : "";
  const whiteTexts = whiteText ? "text-white text-center my-4" : "";

  return (
    <p className={`text-gray-700 py-4 ${largeAlign} ${whiteTexts}`}>
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
