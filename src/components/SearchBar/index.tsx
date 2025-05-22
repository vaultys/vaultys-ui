"use client";
import { KeyboardEventHandler, MouseEventHandler, ReactNode, useEffect, useRef, useState } from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";

export interface SearchBarProps {
  onKeyUp?: Function;
  onClick?: Function;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  defaultHide?: boolean;
  children?: ReactNode;
  closeOnSelect?: boolean;
  onFocusChanged?: (isFocused: boolean) => void;
  debounceTime?: number;
  onSearch?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  props?: { [key: string]: string };
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onKeyUp,
  onClick,
  className,
  onChange,
  value = "",
  placeholder = "Search...",
  defaultHide = false,
  children,
  closeOnSelect = false,
  onFocusChanged,
  debounceTime,
  onSearch,
  onKeyDown,
  ...props
}) => {
  const [hide, setHide] = useState<boolean>(defaultHide);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const childRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(value);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const previousValueRef = useRef<string>(value);

  // Validation: si debounceTime est défini, onSearch doit aussi être défini
  useEffect(() => {
    if (debounceTime !== undefined && onSearch === undefined) {
      console.warn("If debounceTime is provided, onSearch should also be provided");
    }
  }, [debounceTime, onSearch]);

  const handleSearchIconClick = () => {
    if (defaultHide) setHide(!hide);
    else if (inputRef.current) inputRef.current.focus();
  };

  const handleClearSearch = () => {
    setInputValue("");
    if (onChange) onChange("");
    if (onSearch) onSearch("");
    if (inputRef.current) inputRef.current.focus();
    previousValueRef.current = "";
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Logique de debounce pour appeler onSearch uniquement lorsque la valeur a changé
  useEffect(() => {
    if (debounceTime && onSearch && inputValue !== previousValueRef.current) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        onSearch(inputValue);
        previousValueRef.current = inputValue;
        debounceTimerRef.current = null;
      }, debounceTime);

      return () => {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
      };
    }
  }, [inputValue, debounceTime, onSearch]);

  useEffect(() => {
    setTimeout(() => {
      if (defaultHide && !hide && inputRef.current) {
        inputRef.current.focus();
      }
    }, 300);
  }, [hide, defaultHide]);

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

  // Notify parent when focus state changes
  useEffect(() => {
    if (onFocusChanged) {
      onFocusChanged(isFocused);
    }
  }, [isFocused, onFocusChanged]);

  return (
    <div
      {...props}
      className={`${className} group relative transition-all duration-300 ease-in-out rounded-xl
      ${!hide && children && isFocused ? "shadow-lg !rounded-b-none" : "shadow hover:shadow-md"}`}
    >
      <div className={`relative flex flex-row items-center ${hide ? "justify-end" : ""} overflow-hidden`}>
        <BsSearch
          className="absolute z-20 left-3 w-5 h-5 md:w-6 md:h-6 cursor-pointer text-gray-400 hover:text-gray-700 transition-colors"
          onClick={handleSearchIconClick}
          aria-label="Search"
        />
        <input
          ref={inputRef}
          placeholder={placeholder}
          data-test="search"
          value={inputValue}
          autoComplete="off"
          accessKey="shift+e"
          className={`w-full rounded-xl py-3 pl-12 pr-10 bg-transparent focus-visible:outline-none
          border border-transparent focus:border-gray-300 hover:border-gray-200
          text-sm md:text-base transform transition-all duration-300
          ${hide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
          onKeyUp={onKeyUp as KeyboardEventHandler<HTMLInputElement>}
          onKeyDown={onKeyDown}
          onChange={(e) => {
            const newValue = e.target.value;
            setInputValue(newValue);
            if (onChange) onChange(newValue);
            // Don't update previousValueRef here to allow debounce to detect the change
          }}
          onClick={onClick as MouseEventHandler<HTMLInputElement>}
          onFocus={() => setIsFocused(true)}
        />
        {inputValue && !hide && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-3 z-20 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Clear search"
          >
            <IoMdClose className="w-4 h-4 text-gray-500 hover:text-gray-700" />
          </button>
        )}
      </div>
      <div
        ref={childRef}
        className={`w-full ${className} !rounded-t-none absolute z-40  overflow-y-auto 
        transition-all duration-300 ease-in-out 
        ${!hide && isFocused ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        onClick={() => {
          if (closeOnSelect) setIsFocused(false);
        }}
      >
        {children}
      </div>
    </div>
  );
};
