"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { RowItemButton } from "./RowItemButton";
import { RowItemEditText } from "./RowItemEditText";
import { RowItemSpan } from "./RowItemSpan";
import { RowItemSwitch } from "./RowItemSwitch";
import { ColumnType } from ".";
import { RowItemDropdown } from "./RowItemDropdown";
import { Checkbox } from "@nextui-org/react";
export const RowItem = ({ type, value, title, editMode, items, onChange, onClick, className, children, disabled = false, maxLines, inputType = "text", id, testId }) => {
    const getChild = () => {
        var _a;
        switch (type) {
            case ColumnType.BUTTON:
                return _jsx(RowItemButton, { onClick: () => typeof onClick === "function" && onClick(), title: title !== null && title !== void 0 ? title : "", disabled: disabled });
            case ColumnType.CHECKBOX:
                return _jsx(Checkbox, { onValueChange: (value) => typeof onChange === "function" && onChange(value), isSelected: value, isDisabled: disabled });
            case ColumnType.EDIT_TEXT:
                return (_jsx(RowItemEditText, { inputType: inputType, maxLines: maxLines, onClick: () => typeof onClick === "function" && onClick(), editMode: editMode !== null && editMode !== void 0 ? editMode : false, onChange: (value) => typeof onChange === "function" && onChange(value), value: value }));
            case ColumnType.CUSTOM:
                return children;
            case ColumnType.SWITCH:
                return _jsx(RowItemSwitch, { check: value, disabled: disabled, onChange: (checked) => onChange && onChange(checked) });
            case ColumnType.TEXT:
                return _jsx(RowItemSpan, { value: (_a = value) !== null && _a !== void 0 ? _a : title });
            case ColumnType.DROPDOWN:
                return _jsx(RowItemDropdown, { value: value, items: items !== null && items !== void 0 ? items : [], onChange: (value) => onChange && onChange(value) });
            default:
                return _jsx(_Fragment, {});
        }
    };
    return (_jsx("td", { className: ` px-2 first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] ${className}`, id: id, "data-test": testId, children: getChild() }));
};
