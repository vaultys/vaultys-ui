"use client";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";
export const QrCodeElement = ({ text, className }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        QRCode.toCanvas(canvas, text);
    }, []);
    return <canvas ref={canvasRef} className={`rounded-lg shadow-lg ${className}`}/>;
};
