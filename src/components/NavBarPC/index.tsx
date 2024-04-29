"use client";
import React, { ReactNode } from "react";

export interface NavBarProps {
  children: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children, startContent, endContent }) => {
  return (
    <nav className="vui-z-30 vui-shadow vui-bg-light-secondary dark:vui-bg-dark-secondary vui-w-full vui-flex vui-flex-row vui-gap-4 vui-items-center vui-px-4 vui-py-2">
      {startContent}
      <div className="vui-flex vui-flex-row vui-items-center vui-grow">
        {React.Children.map(children, (child, index) => {
          return <div key={index}>{child}</div>;
        })}
      </div>
      {endContent}
    </nav>
  );
};
