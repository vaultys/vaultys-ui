"use client";
import { ReactElement } from "react";

export interface HeaderProps {
  items: ReactElement[];
}

export const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <thead className="[&>tr]:first:vui-rounded-large vui-sticky vui-top-5 z-20 [&>tr]:first:vui-shadow-small">
      <tr>{items}</tr>
    </thead>
  );
};
