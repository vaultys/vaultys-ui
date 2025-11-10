import { PasswordType, PasswordConfig, PassphraseConfig } from "../PasswordGenerator";
export interface SelectPasswordProps {
    label?: string;
    description?: string;
    password?: string;
    onChange?: (value: string) => void;
    passwordConfig?: PasswordConfig;
    passphraseConfig?: PassphraseConfig;
    passwordType?: PasswordType;
    locale?: "fr" | "en" | "es" | "de" | "zh";
    testId?: string;
    compact?: boolean;
}
export declare const SelectPassword: React.FC<SelectPasswordProps>;
