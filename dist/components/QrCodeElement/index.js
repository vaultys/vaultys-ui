"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";
export const QrCodeElement = ({ text, className }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        QRCode.toCanvas(canvas, text);
    }, []);
    return _jsx("canvas", { ref: canvasRef, className: `rounded-lg shadow-lg ${className}` });
};
