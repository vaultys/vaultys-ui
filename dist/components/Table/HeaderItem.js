"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown";
export var SortType;
(function (SortType) {
    SortType[SortType["ASCENDING"] = 0] = "ASCENDING";
    SortType[SortType["DESCENDING"] = 1] = "DESCENDING";
})(SortType || (SortType = {}));
export const HeaderItem = ({ title, children, sortColumn = false, sortActive, sortType = SortType.ASCENDING, onClick, className, testId }) => {
    return (_jsx("th", { className: `bg-background first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] py-2 px-2 ${sortColumn && "cursor-pointer"} ${className}`, onClick: () => sortColumn && typeof onClick === "function" && onClick(), "data-test": testId, children: _jsxs("div", { className: "flex flex-row gap-2", children: [title, children, sortColumn && _jsx(FaCaretDown, { className: `transition-all transform ${sortActive ? "visible" : "invisible"} ${sortType === SortType.ASCENDING && "rotate-180"}` })] }) }));
};
