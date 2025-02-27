"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
export const RowItemDropdown = ({ value, items, onChange }) => {
    return (_jsxs(Dropdown, { className: "bg-light dark:bg-dark", children: [_jsx(DropdownTrigger, { children: _jsx(Button, { endContent: _jsx(IoMdArrowDropdown, {}), variant: "bordered", children: value }) }), _jsx(DropdownMenu, { children: items.map((item) => (_jsx(DropdownItem, { onPress: () => onChange(item), children: item }, item))) })] }));
};
