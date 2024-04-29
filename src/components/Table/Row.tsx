"use client";
import { ReactElement, useEffect, useState } from "react";
import { BsGearFill } from "react-icons/bs";
import { RowItem } from "./RowItem";
import { ColumnType } from ".";

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

export const Row: React.FC<RowProps> = ({
  children,
  rowItems,
  inactiveState = false,
  selectable = false,
  tableSelectable = false,
  selected = false,
  configurable = false,
  onConfigureClicked,
  onSelectedClicked,
  clickable,
  onRowClicked,
  id,
  warning = false,
  danger = false,
  blur = false,
  dataTest,
  rowIndex,
  showLines,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(selected && selectable);
  }, [selected, selectable]);

  return (
    <tr
      data-test={dataTest}
      id={id}
      className={`${rowIndex && rowIndex % 2 !== 0 && showLines && "vui-brightness-95 dark:vui-brightness-110"} ${
        isSelected
          ? "vui-bg-primary/20 vui-text-primary dark:vui-bg-secondary/20 dark:vui-text-secondary"
          : `${danger ? "vui-bg-danger" : warning ? "vui-bg-warning" : `vui-bg-light-secondary dark:vui-bg-dark-secondary`}`
      } ${inactiveState && "vui-text-gray-500"}
      ${blur && "vui-blur-sm"} hover:vui-blur-0 
       hover:vui-brightness-75 dark:hover:vui-brightness-125 vui-h-12 ${clickable && "vui-cursor-pointer"}`}
      onClick={() => {
        typeof onRowClicked === "function" && onRowClicked();
      }}
    >
      {rowItems}
      {children}
      {tableSelectable && (
        <RowItem
          disabled={!selectable}
          testId={`${dataTest}-select`}
          type={ColumnType.CHECKBOX}
          onChange={(value) => {
            if (!selectable) return;
            typeof onSelectedClicked === "function" && onSelectedClicked(!isSelected);
            setIsSelected(!isSelected);
          }}
          value={isSelected}
        />
      )}

      {configurable && (
        <RowItem type={ColumnType.CUSTOM} id={`${id}-config`} testId={`${dataTest}-configure`}>
          <BsGearFill
            className="vui-w-6 vui-h-6 vui-cursor-pointer"
            onClick={(e: any) => {
              e.stopPropagation();
              typeof onConfigureClicked === "function" && onConfigureClicked();
            }}
          />
        </RowItem>
      )}
    </tr>
  );
};
