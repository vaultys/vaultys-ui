"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export const NavBar = ({ children, startContent, endContent }) => {
    return (_jsxs("nav", { className: "z-30 shadow bg-light-secondary dark:bg-dark-secondary w-full flex flex-row gap-4 items-center px-4 py-2", children: [startContent, _jsx("div", { className: "flex flex-row items-center grow", children: React.Children.map(children, (child, index) => {
                    return _jsx("div", { children: child }, index);
                }) }), endContent] }));
};
