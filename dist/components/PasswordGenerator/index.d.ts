/// <reference types="react" />
export declare enum PasswordType {
    PASSWORD = 0,
    PASSPHRASE = 1
}
export type PasswordConfig = {
    length: number;
    numbers: boolean;
    capitalLetters: boolean;
    lowercaseLetters: boolean;
    specialCharacters: boolean;
};
export type PassphraseConfig = {
    wordNumber: number;
    language: Locale;
};
export type Locale = "fr" | "en";
export interface PasswordGeneratorProps {
    passwordType?: PasswordType;
    passwordConfig?: PasswordConfig;
    passphraseConfig?: PassphraseConfig;
    locale?: Locale;
    onConfigChanged: (config: {
        passwordType: PasswordType;
        passwordConfig: PasswordConfig;
        passphraseConfig: PassphraseConfig;
    }) => void;
}
export declare const PasswordGenerator: React.FC<PasswordGeneratorProps>;
