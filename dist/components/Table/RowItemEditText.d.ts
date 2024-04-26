/// <reference types="react" />
export interface RowItemEditTextProps {
    editMode: boolean;
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
    maxLines?: number;
    inputType?: string;
}
export declare const RowItemEditText: React.FC<RowItemEditTextProps>;
