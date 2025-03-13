"use client";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export interface QrCodeElementProps extends React.HTMLAttributes<HTMLCanvasElement> {
  text: string;
  className?: string;
}

export const QrCodeElement: React.FC<QrCodeElementProps> = ({ text, className, ...rest }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    QRCode.toCanvas(canvas, text);
  }, []);
  return <canvas ref={canvasRef} className={`rounded-lg shadow-lg ${className || ""}`} {...rest} />;
};
