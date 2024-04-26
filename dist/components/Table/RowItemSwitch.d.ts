/// <reference types="react" />
export interface RowItemSwitchProps {
    check: boolean;
    name?: string;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
}
export declare const RowItemSwitch: React.FC<RowItemSwitchProps>;
