"use client";
import React, { ReactNode } from "react";

export interface NavBarProps {
  children: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children, startContent, endContent }) => {
  return (
    <nav className="z-30 shadow bg-light-secondary dark:bg-dark-secondary w-full flex flex-row gap-4 items-center px-4 py-2">
      {startContent}
      <div className="flex flex-row items-center grow">
        {React.Children.map(children, (child, index) => {
          return <div key={index}>{child}</div>;
        })}
      </div>
      {endContent}
    </nav>
  );
};
