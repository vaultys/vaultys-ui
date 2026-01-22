"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
export const SearchBar = (_a) => {
    var { onKeyUp, onClick, className, onChange, value = "", placeholder = "Search...", defaultHide = false, children, closeOnSelect = false, onFocusChanged, debounceTime, onSearch, onKeyDown, size = "md", icon } = _a, props = __rest(_a, ["onKeyUp", "onClick", "className", "onChange", "value", "placeholder", "defaultHide", "children", "closeOnSelect", "onFocusChanged", "debounceTime", "onSearch", "onKeyDown", "size", "icon"]);
    const [hide, setHide] = useState(defaultHide);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const childRef = useRef(null);
    const [inputValue, setInputValue] = useState(value);
    const debounceTimerRef = useRef(null);
    const previousValueRef = useRef(value);
    // Styles based on size
    const sizeStyles = {
        xs: {
            input: "py-1 pl-8 pr-7 text-xs",
            searchIcon: "left-2 w-3 h-3",
            closeIcon: "w-3 h-3",
            closeButton: "right-2",
        },
        sm: {
            input: "py-2 pl-10 pr-8 text-sm",
            searchIcon: "left-2.5 w-4 h-4",
            closeIcon: "w-3.5 h-3.5",
            closeButton: "right-2.5",
        },
        md: {
            input: "py-3 pl-12 pr-10 text-sm md:text-base",
            searchIcon: "left-3 w-5 h-5 md:w-6 md:h-6",
            closeIcon: "w-4 h-4",
            closeButton: "right-3",
        },
        lg: {
            input: "py-3.5 pl-14 pr-12 text-base md:text-lg",
            searchIcon: "left-4 w-6 h-6 md:w-7 md:h-7",
            closeIcon: "w-5 h-5",
            closeButton: "right-4",
        },
        xl: {
            input: "py-4 pl-16 pr-14 text-lg md:text-xl",
            searchIcon: "left-5 w-7 h-7 md:w-8 md:h-8",
            closeIcon: "w-6 h-6",
            closeButton: "right-5",
        },
    };
    // Validation: si debounceTime est défini, onSearch doit aussi être défini
    useEffect(() => {
        if (debounceTime !== undefined && onSearch === undefined) {
            console.warn("If debounceTime is provided, onSearch should also be provided");
        }
    }, [debounceTime, onSearch]);
    const handleSearchIconClick = () => {
        if (defaultHide)
            setHide(!hide);
        else if (inputRef.current)
            inputRef.current.focus();
    };
    const handleClearSearch = () => {
        setInputValue("");
        if (onChange)
            onChange("");
        if (onSearch)
            onSearch("");
        if (inputRef.current)
            inputRef.current.focus();
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
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target) && childRef.current && !childRef.current.contains(event.target)) {
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
    return (_jsxs("div", Object.assign({}, props, { className: `${className} group relative transition-all duration-300 ease-in-out rounded-xl
      ${!hide && children && isFocused ? "shadow-lg rounded-b-none!" : "shadow-sm hover:shadow-md"}`, children: [_jsxs("div", { className: `relative flex flex-row items-center ${hide ? "justify-end" : ""} overflow-hidden`, children: [icon ? (_jsx("div", { className: `absolute flex items-center justify-center z-20 ${sizeStyles[size].searchIcon} cursor-pointer text-gray-400 hover:text-gray-700 transition-colors`, onClick: handleSearchIconClick, children: icon })) : (_jsx(BsSearch, { className: `absolute z-20 ${sizeStyles[size].searchIcon} cursor-pointer text-gray-400 hover:text-gray-700 transition-colors`, onClick: handleSearchIconClick, "aria-label": "Search" })), _jsx("input", { ref: inputRef, placeholder: placeholder, "data-test": "search", value: inputValue, autoComplete: "off", accessKey: "shift+e", className: `w-full rounded-xl ${sizeStyles[size].input} bg-transparent focus-visible:outline-hidden
          border border-transparent focus:border-gray-300 hover:border-gray-200
          transform transition-all duration-300
          ${hide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`, onKeyUp: onKeyUp, onKeyDown: onKeyDown, onChange: (e) => {
                            const newValue = e.target.value;
                            setInputValue(newValue);
                            if (onChange)
                                onChange(newValue);
                            // Don't update previousValueRef here to allow debounce to detect the change
                        }, onClick: onClick, onFocus: () => setIsFocused(true) }), inputValue && !hide && (_jsx("button", { type: "button", onClick: handleClearSearch, className: `absolute ${sizeStyles[size].closeButton} z-20 p-1 rounded-full hover:bg-gray-100 transition-colors`, "aria-label": "Clear search", children: _jsx(IoMdClose, { className: `${sizeStyles[size].closeIcon} text-gray-500 hover:text-gray-700` }) }))] }), _jsx("div", { ref: childRef, className: `w-full ${className} rounded-t-none! absolute z-40  overflow-y-auto 
        transition-all duration-300 ease-in-out 
        ${!hide && isFocused ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`, onClick: () => {
                    if (closeOnSelect)
                        setIsFocused(false);
                }, children: children })] })));
};
