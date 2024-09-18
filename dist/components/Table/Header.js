"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const Header = ({ items }) => {
    return (_jsx("thead", { className: "[&>tr]:first:rounded-large sticky top-5 z-20 [&>tr]:first:shadow-small", children: _jsx("tr", { children: items }) }));
};
