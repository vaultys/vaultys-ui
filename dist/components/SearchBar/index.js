"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
export const SearchBar = ({ onKeyUp, onClick, className, onChange, value }) => {
    return (_jsxs("div", { className: `relative flex flex-row gap-2 items-center shadow-lg ${className}`, children: [_jsx(BsSearch, { className: "absolute ml-5 z-20 w-6 h-6" }), _jsx("input", { "data-test": "search", value: value, autoComplete: "off", accessKey: "shift+e", className: "w-full rounded-xl md:min-w-min m-0 py-2 pl-12 bg-transparent focus-visible:outline-none focus-visible:opacity-100 text-xl", onKeyUp: onKeyUp, onChange: (e) => {
                    if (typeof onChange === "function")
                        onChange(e.target.value);
                }, onClick: onClick })] }));
};
