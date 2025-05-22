"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "@heroui/react";
import { useState } from "react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
export const InputPassword = ({ label, description, onChange, valid = true, color, placeholder, value, disabled, copyToClipboard = false, testId, }) => {
    const [show, setShow] = useState();
    return (_jsx(Input, { autoComplete: "off", "data-test": testId, label: label, value: value, placeholder: placeholder, onValueChange: (value) => onChange && onChange(value), classNames: {
            inputWrapper: color,
            label: `text-lg font-bold`,
            input: `font-mono`,
        }, description: description, isInvalid: !valid, isDisabled: disabled, endContent: _jsxs("div", { className: "flex flex-row gap-2 items-center", children: [copyToClipboard && (_jsx(BiCopy, { className: "text-xl cursor-pointer", onClick: () => {
                        if (value) {
                            navigator.clipboard.writeText(value);
                        }
                    } })), _jsx("button", { className: "focus:outline-none", type: "button", onClick: () => setShow(!show), children: show ? _jsx(BiShow, { className: "text-xl cursor-pointer " }) : _jsx(BiHide, { className: "text-xl cursor-pointer " }) })] }), type: show ? "text" : "password" }));
};
