export interface QrCodeElementProps extends React.HTMLAttributes<HTMLCanvasElement> {
    text: string;
    className?: string;
}
export declare const QrCodeElement: React.FC<QrCodeElementProps>;
