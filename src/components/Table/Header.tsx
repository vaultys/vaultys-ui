"use client";
import { ReactElement } from "react";

export interface HeaderProps {
  items: ReactElement[];
}

export const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <thead className="[&>tr]:first:rounded-large sticky top-5 z-20 [&>tr]:first:shadow-small">
      <tr>{items}</tr>
    </thead>
  );
};
