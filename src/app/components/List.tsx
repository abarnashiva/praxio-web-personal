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
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item.key} className="text-primary text-xl">
          <text className="text-gray-700 text-base">{item.content}</text>
        </li>
      ))}
    </ul>
  );
}
