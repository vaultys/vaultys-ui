"use client";

export interface NavButtonPCProps {
  title: string;
  current: boolean;
  onClick?: () => void;
}

export const NavButtonPC: React.FC<NavButtonPCProps> = ({ title, current, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`block py-2 pl-3 pr-4 ${
        current ? "text-primary dark:text-secondary" : "text-black dark:text-white"
      } cursor-pointer hover:text-primary hover:dark:text-secondary`}
    >
      {title}
    </div>
  );
};
