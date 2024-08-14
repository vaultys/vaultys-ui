import { ReactElement } from "react";
export declare enum SortType {
    ASCENDING = 0,
    DESCENDING = 1
}
export interface HeaderItemProps {
    title?: string;
    children?: ReactElement;
    sortColumn?: boolean;
    sortActive?: boolean;
    sortType?: SortType;
    onClick?: () => void;
    className?: string;
    testId?: string;
}
export declare const HeaderItem: React.FC<HeaderItemProps>;
