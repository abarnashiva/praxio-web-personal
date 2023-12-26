import React from "react";

interface ListItem {
  key: string | number;
  content: React.ReactNode;
}

interface ListProps {
  items: ListItem[];
}

export default function List({ items }: ListProps) {
  return (
    <ul className="list-disc list-inside h-20">
      {items.map((item) => (
        <li key={item.key}>{item.content}</li>
      ))}
    </ul>
  );
}
