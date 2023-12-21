import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading ({children}: HeadingProps) {
	return (
		<h1 className="text-primary font-semibold text-3xl pt-4">{children}</h1>
	)
}