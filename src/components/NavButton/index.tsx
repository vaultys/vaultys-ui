"use client";

export interface NavButtonProps {
  title: string;
  current: boolean;
  onClick?: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ title, current, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`vui-flex vui-py-2 vui-pl-3 vui-pr-4 ${
        current ? "vui-text-primary dark:vui-text-secondary vui-font-bold" : "vui-text-black dark:vui-text-white"
      } vui-cursor-pointer hover:vui-text-primary hover:dark:vui-text-secondary`}
    >
      {title}
    </div>
  );
};
