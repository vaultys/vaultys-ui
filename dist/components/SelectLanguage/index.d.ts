/// <reference types="react" />
export interface SelectLanguageProps {
    languages: string[];
    onLanguageClicked: (language: string) => void;
    currentValue: string;
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}
export declare const SelectLanguage: React.FC<SelectLanguageProps>;
