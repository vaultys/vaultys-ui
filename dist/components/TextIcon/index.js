"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar } from "@heroui/react";
// Generate a consistent color from text
const stringToColor = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Generate HSL color with fixed saturation and lightness
    const h = Math.abs(hash % 360);
    return `hsl(${h}, 70%, 60%)`;
};
export const TextIcon = (_a) => {
    var { text = "Te", backgroundColor, className = "" } = _a, props = __rest(_a, ["text", "backgroundColor", "className"]);
    // Use provided backgroundColor or generate one from text
    const bgColor = backgroundColor || stringToColor(text);
    return (_jsx(Avatar, Object.assign({ getInitials: (value) => {
            if (!value)
                return "";
            const nameParts = value.trim().split(/\s+/).filter(Boolean);
            if (nameParts.length > 1) {
                // Get initials (first letter of each part)
                return nameParts
                    .map((part) => part[0].toUpperCase())
                    .join("")
                    .substring(0, 2);
            }
            else {
                // If not possible, just take the first two letters
                return value.substring(0, 2).toUpperCase();
            }
        }, name: text, style: { backgroundColor: bgColor }, className: className }, props, { classNames: {
            name: "text-black font-bold",
        } })));
};
export default TextIcon;
