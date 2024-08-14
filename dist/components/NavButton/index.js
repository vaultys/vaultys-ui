"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const NavButton = ({ title, current, onClick }) => {
    return (_jsx("div", { onClick: () => onClick && onClick(), className: `flex py-2 pl-3 pr-4 ${current ? "text-primary dark:text-secondary font-bold" : "text-black dark:text-white"} cursor-pointer hover:text-primary hover:dark:text-secondary`, children: title }));
};
