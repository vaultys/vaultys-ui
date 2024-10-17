"use client";
import { useEffect, useState } from "react";
import { BsGearFill } from "@react-icons/all-files/bs/BsGearFill";
import { RowItem } from "./RowItem";
import { ColumnType } from ".";
export const Row = ({ children, rowItems, inactiveState = false, selectable = false, tableSelectable = false, selected = false, configurable = false, onConfigureClicked, onSelectedClicked, clickable, onRowClicked, id, warning = false, danger = false, blur = false, dataTest, rowIndex, showLines, }) => {
    const [isSelected, setIsSelected] = useState(false);
    useEffect(() => {
        setIsSelected(selected && selectable);
    }, [selected, selectable]);
    return (<tr data-test={dataTest} id={id} className={`${rowIndex && rowIndex % 2 !== 0 && showLines && "brightness-95 dark:brightness-110"} ${isSelected ? "bg-primary/20 text-primary dark:bg-secondary/20 dark:text-secondary" : `${danger ? "bg-danger" : warning ? "bg-warning" : `bg-light-secondary dark:bg-dark-secondary`}`} ${inactiveState && "text-gray-500"}
      ${blur && "blur-sm"} hover:blur-0
       hover:brightness-75 dark:hover:brightness-125 h-12 ${clickable && "cursor-pointer"}`} onClick={() => {
            typeof onRowClicked === "function" && onRowClicked();
        }}>
      {rowItems}
      {children}
      {tableSelectable && (<RowItem disabled={!selectable} testId={`${dataTest}-select`} type={ColumnType.CHECKBOX} onChange={(value) => {
                if (!selectable)
                    return;
                typeof onSelectedClicked === "function" && onSelectedClicked(!isSelected);
                setIsSelected(!isSelected);
            }} value={isSelected}/>)}

      {configurable && (<RowItem type={ColumnType.CUSTOM} id={`${id}-config`} testId={`${dataTest}-configure`}>
          <BsGearFill className="w-6 h-6 cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                typeof onConfigureClicked === "function" && onConfigureClicked();
            }}/>
        </RowItem>)}
    </tr>);
};
