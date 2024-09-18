import React, { ReactElement, ReactNode } from "react";
export declare enum SortType {
    ASCENDING = 0,
    DESCENDING = 1
}
export declare enum ColumnType {
    STRING = 0,
    EDIT_TEXT = 1,
    BUTTON = 2,
    CUSTOM = 3,
    CHECKBOX = 4,
    SWITCH = 5,
    TEXT = 6,
    DROPDOWN = 7
}
export type TableColumn = {
    type: ColumnType;
    name: string;
    sort: boolean;
    jsonFieldName?: string;
    maxLines?: number;
    inputType?: string;
};
export type RowItem = {
    colIndex: number;
    title?: string;
    value?: string | boolean | number;
    onClick?: () => void;
    onChange?: (value: boolean | string | number) => void;
    children?: ReactElement;
    disabled?: boolean;
    items?: string[];
    id?: string;
};
export type TableRow = {
    items: RowItem[];
    rowId?: string;
    id: string;
    selectable?: boolean;
    onUpdate?: (json: {}) => Promise<any>;
    inactive?: boolean;
    warning?: boolean;
    danger?: boolean;
    onConfigureClicked?: () => void;
    clickable?: boolean;
    onClick?: () => void;
};
export interface TableProps {
    cols: TableColumn[];
    rows: TableRow[];
    setSelectedRows?: (ids: string[]) => void;
    refresh?: () => void;
    configureButton?: boolean;
    selectable?: boolean;
    dataTest?: string;
    blur?: boolean;
    unselectAll?: boolean;
    emptyTableContent?: ReactNode;
    showLines?: boolean;
}
export declare const Table: React.FC<TableProps>;
