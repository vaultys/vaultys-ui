/// <reference types="react" />
export interface InputPasswordProps {
    label: string;
    onChange?: (value: string) => void;
    valid?: boolean;
    placeholder?: string;
    value?: string;
    className?: string;
    disabled?: boolean;
    copyToClipboard?: boolean;
    color?: string;
    testId?: string;
}
export declare const InputPassword: React.FC<InputPasswordProps>;
