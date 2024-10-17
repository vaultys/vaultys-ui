"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
export const SearchBar = ({ onKeyUp, onClick, className, onChange, value, placeholder, defaultHide = false }) => {
    const [hide, setHide] = useState(defaultHide);
    const inputRef = useRef(null);
    const handleSearchIconClick = () => {
        if (defaultHide)
            setHide(!hide);
    };
    useEffect(() => {
        setTimeout(() => {
            if (defaultHide && !hide && inputRef.current) {
                inputRef.current.focus();
            }
        }, 300);
    }, [hide]);
    return (_jsxs("div", { className: `pl-2 relative flex flex-row gap-2 items-center shadow ${className} ${hide ? "justify-end" : ""} overflow-hidden`, children: [_jsx(BsSearch, { className: "absolute z-20 w-5 h-5 m-2 md:w-6 md:h-6 cursor-pointer", onClick: handleSearchIconClick }), _jsx("input", { ref: inputRef, placeholder: placeholder, "data-test": "search", value: value, autoComplete: "off", accessKey: "shift+e", className: `ml-12 w-full rounded-xl py-2 bg-transparent focus-visible:outline-none focus-visible:opacity-100 text-sm md:text-xl transform transition-all duration-300 ${hide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`, onKeyUp: onKeyUp, onChange: (e) => {
                    if (typeof onChange === "function")
                        onChange(e.target.value);
                }, onClick: onClick })] }));
};
