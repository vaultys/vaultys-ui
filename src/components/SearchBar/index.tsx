"use client";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

export interface SearchBarProps {
  onKeyUp?: Function;
  onClick?: Function;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onKeyUp,
  onClick,
  className,
  onChange,
  value,
}) => {
  return (
    <div
      className={`vui-relative vui-flex vui-flex-row vui-gap-2 vui-items-center vui-shadow-lg ${className}`}
    >
      <BsSearch className="vui-absolute vui-ml-5 vui-z-20 vui-w-6 vui-h-6" />
      <input
        data-test="search"
        value={value}
        autoComplete="off"
        accessKey="shift+e"
        className="vui-w-full vui-rounded-xl md:vui-min-w-min vui-m-0 vui-py-2 vui-pl-12 vui-bg-transparent focus-visible:vui-outline-none focus-visible:vui-opacity-100 vui-text-xl"
        onKeyUp={onKeyUp as KeyboardEventHandler<HTMLInputElement>}
        onChange={(e) => {
          if (typeof onChange === "function") onChange(e.target.value);
        }}
        onClick={onClick as MouseEventHandler<HTMLInputElement>}
      />
    </div>
  );
};
