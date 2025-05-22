"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const RowItemEditText = ({ editMode, value, onChange, onClick, maxLines = 1, inputType = "text" }) => {
    return (_jsx(_Fragment, { children: maxLines > 1 ? (_jsx("textarea", { rows: maxLines, className: `w-full bg-transparent rounded-lg p-1 border outline-none ${editMode ? "" : "border-transparent"}`, value: value, onChange: (e) => onChange(e.target.value), onClick: () => onClick() })) : (_jsx("input", { type: inputType, className: `w-full bg-transparent rounded-lg p-1 border outline-none text-ellipsis truncate ... ${editMode ? "" : "border-transparent"}`, value: value, onChange: (e) => onChange(e.target.value), onClick: () => onClick() })) }));
};
