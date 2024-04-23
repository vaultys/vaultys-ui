"use client";
import { ReactElement } from "react";

export interface HeaderProps {
  items: ReactElement[];
}

export const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <thead className="z-10 sticky top-0 text-xs uppercase bg-light dark:bg-dark brightness-75 h-10">
      <tr>{items}</tr>
    </thead>
  );
};
