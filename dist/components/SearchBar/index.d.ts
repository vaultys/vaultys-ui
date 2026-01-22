import { ReactNode } from "react";
export type SearchBarSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface SearchBarProps {
    onKeyUp?: Function;
    onClick?: Function;
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    defaultHide?: boolean;
    children?: ReactNode;
    closeOnSelect?: boolean;
    onFocusChanged?: (isFocused: boolean) => void;
    debounceTime?: number;
    onSearch?: (value: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    size?: SearchBarSize;
    props?: {
        [key: string]: string;
    };
    icon?: ReactNode;
}
export declare const SearchBar: React.FC<SearchBarProps>;
