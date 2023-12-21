import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  const words = React.Children.toArray(children).join(" ").split(" ");

  return (
    <p className="text-gray-700 py-4">
      {words.map((word, index) => (
        <span
          key={index}
          className={`${word === "PRAXIO" ? "font-bold text-lg" : ""}`}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
