import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  large?: boolean;
}

export default function Paragraph({ children, large }: ParagraphProps) {
  const words = React.Children.toArray(children).join(" ").split(" ");
  const largeAlign = large ? "text-lg" : "";

  return (
    <p className={`text-gray-700 py-4 ${large}`}>
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
