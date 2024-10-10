export interface SearchBarProps {
    onKeyUp?: Function;
    onClick?: Function;
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
}
export declare const SearchBar: React.FC<SearchBarProps>;
