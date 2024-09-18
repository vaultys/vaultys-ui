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

export const SearchBar: React.FC<SearchBarProps> = ({ onKeyUp, onClick, className, onChange, value }) => {
  return (
    <div className={`relative flex flex-row gap-2 items-center shadow ${className}`}>
      <BsSearch className="absolute ml-5 z-20 w-6 h-6" />
      <input
        data-test="search"
        value={value}
        autoComplete="off"
        accessKey="shift+e"
        className="w-full rounded-xl md:min-w-min m-0 py-2 pl-12 bg-transparent focus-visible:outline-none focus-visible:opacity-100 text-xl"
        onKeyUp={onKeyUp as KeyboardEventHandler<HTMLInputElement>}
        onChange={(e) => {
          if (typeof onChange === "function") onChange(e.target.value);
        }}
        onClick={onClick as MouseEventHandler<HTMLInputElement>}
      />
    </div>
  );
};
