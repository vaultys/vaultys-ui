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
import { useEffect, useRef } from "react";
import QRCode from "qrcode";
export const QrCodeElement = (_a) => {
    var { text, className } = _a, rest = __rest(_a, ["text", "className"]);
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        QRCode.toCanvas(canvas, text);
    }, []);
    return _jsx("canvas", Object.assign({ ref: canvasRef, className: `rounded-lg shadow-lg ${className || ""}` }, rest));
};
