import { ReactNode } from "react";
export interface SearchBarProps {
    onKeyUp?: Function;
    onClick?: Function;
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    defaultHide?: boolean;
    children?: ReactNode;
}
export declare const SearchBar: React.FC<SearchBarProps>;
