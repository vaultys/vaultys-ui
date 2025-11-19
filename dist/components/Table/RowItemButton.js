"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@heroui/react";
export const RowItemButton = ({ title, onClick, disabled = false }) => {
    return (_jsx(Button, { color: "primary", disabled: disabled, onClick: (e) => {
            e.stopPropagation();
            if (!disabled)
                onClick();
        }, children: title }));
};
