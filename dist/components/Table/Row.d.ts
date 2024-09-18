import { ReactElement } from "react";
export interface RowProps {
    children?: ReactElement;
    rowItems?: ReactElement[];
    inactiveState?: boolean;
    selectable?: boolean;
    tableSelectable?: boolean;
    selected?: boolean;
    configurable?: boolean;
    onConfigureClicked?: () => void;
    onSelectedClicked?: (selected: boolean) => void;
    clickable?: boolean;
    onRowClicked?: () => void;
    id?: string;
    warning?: boolean;
    danger?: boolean;
    blur?: boolean;
    dataTest?: string;
    rowIndex?: number;
    showLines?: boolean;
}
export declare const Row: React.FC<RowProps>;
