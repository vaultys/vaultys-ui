import { ReactElement } from "react";
import { ColumnType } from ".";
export interface RowItemProps {
    type: ColumnType;
    value?: string | boolean | number;
    title?: string;
    editMode?: boolean;
    items?: string[];
    onChange?: (value: string | boolean) => void;
    onClick?: () => void;
    className?: string;
    children?: ReactElement;
    disabled?: boolean;
    maxLines?: number;
    inputType?: string;
    id?: string;
    testId?: string;
}
export declare const RowItem: React.FC<RowItemProps>;
