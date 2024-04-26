/// <reference types="react" />
export interface RowItemButtonProps {
    title: string;
    onClick: () => void;
    disabled?: boolean;
}
export declare const RowItemButton: React.FC<RowItemButtonProps>;
