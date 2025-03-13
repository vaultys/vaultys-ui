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
    var { onKeyUp, onClick, className, onChange, value = "", placeholder = "Search...", defaultHide = false, children, closeOnSelect = false } = _a, props = __rest(_a, ["onKeyUp", "onClick", "className", "onChange", "value", "placeholder", "defaultHide", "children", "closeOnSelect"]);
    const [hide, setHide] = useState(defaultHide);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const childRef = useRef(null);
    const [inputValue, setInputValue] = useState(value);
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
        if (inputRef.current)
            inputRef.current.focus();
    };
    useEffect(() => {
        setInputValue(value);
    }, [value]);
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
    return (_jsxs("div", Object.assign({}, props, { className: `${className} group relative transition-all duration-300 ease-in-out rounded-xl
      ${!hide && children && isFocused ? "shadow-lg !rounded-b-none" : "shadow hover:shadow-md"}`, children: [_jsxs("div", { className: `relative flex flex-row items-center ${hide ? "justify-end" : ""} overflow-hidden`, children: [_jsx(BsSearch, { className: "absolute z-20 left-3 w-5 h-5 md:w-6 md:h-6 cursor-pointer text-gray-400 hover:text-gray-700 transition-colors", onClick: handleSearchIconClick, "aria-label": "Search" }), _jsx("input", { ref: inputRef, placeholder: placeholder, "data-test": "search", value: inputValue, autoComplete: "off", accessKey: "shift+e", className: `w-full rounded-xl py-3 pl-12 pr-10 bg-transparent focus-visible:outline-none
          border border-transparent focus:border-gray-300 hover:border-gray-200
          text-sm md:text-base transform transition-all duration-300
          ${hide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`, onKeyUp: onKeyUp, onChange: (e) => {
                            setInputValue(e.target.value);
                            if (onChange)
                                onChange(e.target.value);
                        }, onClick: onClick, onFocus: () => setIsFocused(true) }), inputValue && !hide && (_jsx("button", { type: "button", onClick: handleClearSearch, className: "absolute right-3 z-20 p-1 rounded-full hover:bg-gray-100 transition-colors", "aria-label": "Clear search", children: _jsx(IoMdClose, { className: "w-4 h-4 text-gray-500 hover:text-gray-700" }) }))] }), _jsx("div", { ref: childRef, className: `w-full ${className} !rounded-t-none absolute z-40  overflow-y-auto 
        transition-all duration-300 ease-in-out 
        ${!hide && isFocused ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`, onClick: () => {
                    if (closeOnSelect)
                        setIsFocused(false);
                }, children: children })] })));
};
