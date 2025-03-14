"use client";
import { ReactElement } from "react";

export interface WindowScreenProps {
  children: ReactElement;
  icon?: string;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const WindowScreen: React.FC<WindowScreenProps> = ({ children, icon, title = "SmartLink", size = "lg" }) => (
  <div className="flex flex-col w-full p-2 h-screen justify-center items-center bg-light bg-opacity-50 backdrop-blur">
    <div
      className={`max-h-full  shadow-lg w-full shadow-black/40 rounded-t-xl rounded-b overflow-clip ${size === "sm" && "max-w-xl"} ${size === "md" && "max-w-3xl"} ${
        size === "lg" && "max-w-5xl"
      } ${size === "xl" && "max-w-7xl"}`}
    >
      <div className="flex flex-row justify-between text-xl p-3 w-full bg-brand">
        {icon && <img className="h-8 rounded" src={icon} />}
        <span className="w-full text-center">{title}</span>
        {icon && <img className="h-8 opacity-0" src={icon} />}
      </div>
      <div className="overflow-auto max-h-full flex flex-col gap-5 justify-center items-center shadow-inner border-2 dark:border-dark-secondary w-full bg-light dark:bg-dark">
        {children}
      </div>
    </div>
  </div>
);
