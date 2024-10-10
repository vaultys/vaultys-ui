export interface InputPasswordProps {
    label: string;
    description?: string;
    onChange?: (value: string) => void;
    valid?: boolean;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    copyToClipboard?: boolean;
    color?: string;
    testId?: string;
}
export declare const InputPassword: React.FC<InputPasswordProps>;
