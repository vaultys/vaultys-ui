/// <reference types="react" />
export interface RowItemDropdownProps {
    value: string;
    items: string[];
    onChange: (value: string) => void;
}
export declare const RowItemDropdown: React.FC<RowItemDropdownProps>;
