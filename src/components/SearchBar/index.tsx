"use client";
import { KeyboardEventHandler, MouseEventHandler, ReactNode, useEffect, useRef, useState } from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

export interface SearchBarProps {
  onKeyUp?: Function;
  onClick?: Function;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  defaultHide?: boolean;
  children?: ReactNode;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onKeyUp, onClick, className, onChange, value, placeholder, defaultHide = false, children }) => {
  const [hide, setHide] = useState<boolean>(defaultHide);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const childRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => {
    if (defaultHide) setHide(!hide);
  };

  useEffect(() => {
    setTimeout(() => {
      if (defaultHide && !hide && inputRef.current) {
        inputRef.current.focus();
      }
    }, 300);
  }, [hide]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node) && childRef.current && !childRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${className} group shadow relative transition-all duration-300 hover:transition-none delay-300 ease-in-out  ${
        !hide && children && isFocused && "!rounded-b-none"
      }`}
    >
      <div className={`relative flex flex-row gap-2 items-center   ${hide ? "justify-end" : ""} overflow-hidden `}>
        <BsSearch className="text-red-500 absolute z-20 w-5 h-5 m-2 md:w-6 md:h-6 cursor-pointer" onClick={handleSearchIconClick} />
        <input
          ref={inputRef}
          placeholder={placeholder}
          data-test="search"
          value={value}
          autoComplete="off"
          accessKey="shift+e"
          className={`ml-12 w-full rounded-xl py-2 bg-transparent focus-visible:outline-none focus-visible:opacity-100 text-sm md:text-xl transform transition-all duration-300 ${
            hide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          } `}
          onKeyUp={onKeyUp as KeyboardEventHandler<HTMLInputElement>}
          onChange={(e) => {
            if (typeof onChange === "function") onChange(e.target.value);
          }}
          onClick={onClick as MouseEventHandler<HTMLInputElement>}
          onFocus={() => setIsFocused(true)}
        />
      </div>
      <div
        ref={childRef}
        className={`w-full  ${className} !rounded-t-none absolute delay-0 z-40 overflow-y-auto transition-max-height duration-300 ease-in-out overflow-hidden ${
          !hide && isFocused ? "max-h-96" : "max-h-0"
        }`}
        onClick={() => {
          console.log("children clicked");
          setIsFocused(false);
        }}
      >
        {children}
      </div>
    </div>
  );
};
