"use client";
import { ReactElement } from "react";

export interface WindowScreenProps {
  children: ReactElement;
  icon?: string;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const WindowScreen: React.FC<WindowScreenProps> = ({ children, icon, title = "SmartLink", size = "lg" }) => (
  <div className="vui-flex vui-flex-col vui-w-full vui-p-2 vui-h-screen vui-justify-center vui-items-center vui-bg-light vui-bg-opacity-50 vui-backdrop-blur">
    <div
      className={`vui-max-h-full  vui-shadow-lg vui-w-full vui-shadow-black/40 vui-rounded-t-xl vui-rounded-b vui-overflow-clip ${size === "sm" && "vui-max-w-xl"} ${size === "md" && "vui-max-w-3xl"} ${
        size === "lg" && "vui-max-w-5xl"
      } ${size === "xl" && "vui-max-w-7xl"}`}
    >
      <div className="vui-flex vui-flex-row vui-justify-between vui-text-xl vui-p-3 vui-w-full vui-bg-secondary dark:vui-bg-primary">
        {icon && <img className="vui-h-8 vui-rounded" src={icon} />}
        <span className="vui-w-full vui-text-center">{title}</span>
        {icon && <img className="vui-h-8 vui-opacity-0" src={icon} />}
      </div>
      <div className="vui-overflow-auto vui-max-h-full vui-flex vui-flex-col vui-gap-5 vui-justify-center vui-items-center vui-shadow-inner vui-border-2 dark:vui-border-dark-secondary vui-w-full vui-bg-light dark:vui-bg-dark">
        {children}
      </div>
    </div>
  </div>
);
