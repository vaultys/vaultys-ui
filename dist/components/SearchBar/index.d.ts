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
    closeOnSelect?: boolean;
    props?: {
        [key: string]: string;
    };
}
export declare const SearchBar: React.FC<SearchBarProps>;
