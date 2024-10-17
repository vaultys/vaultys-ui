"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { Row } from "./Row";
import { HeaderItem } from "./HeaderItem";
import { RowItem } from "./RowItem";
import { Checkbox } from "@nextui-org/react";
export var SortType;
(function (SortType) {
    SortType[SortType["ASCENDING"] = 0] = "ASCENDING";
    SortType[SortType["DESCENDING"] = 1] = "DESCENDING";
})(SortType || (SortType = {}));
export var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["STRING"] = 0] = "STRING";
    ColumnType[ColumnType["EDIT_TEXT"] = 1] = "EDIT_TEXT";
    ColumnType[ColumnType["BUTTON"] = 2] = "BUTTON";
    ColumnType[ColumnType["CUSTOM"] = 3] = "CUSTOM";
    ColumnType[ColumnType["CHECKBOX"] = 4] = "CHECKBOX";
    ColumnType[ColumnType["SWITCH"] = 5] = "SWITCH";
    ColumnType[ColumnType["TEXT"] = 6] = "TEXT";
    ColumnType[ColumnType["DROPDOWN"] = 7] = "DROPDOWN";
})(ColumnType || (ColumnType = {}));
export const Table = ({ cols, rows, setSelectedRows, refresh, configureButton = false, selectable = true, dataTest, blur = false, unselectAll, emptyTableContent, showLines, }) => {
    var _a;
    const [selectedAll, setSelectedAll] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [rowInEditMode, setRowInEditMode] = useState();
    const [currentSortIndex, setCurrentSortIndex] = useState(cols.indexOf((_a = cols.find((col) => col.sort)) !== null && _a !== void 0 ? _a : cols[0]));
    const [currentSortType, setCurrentSortType] = useState(SortType.ASCENDING);
    const [selectedIds, setSelectedIds] = useState([]);
    const [values, setValues] = useState([]);
    const ref = useRef(null);
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);
    useEffect(() => {
        selectedAll ? setSelectedIds(rows.filter((row) => row.selectable).map((row) => row.id)) : setSelectedIds([]);
    }, [selectedAll]);
    useEffect(() => {
        if (unselectAll) {
            setSelectedAll(false);
            setSelectedIds([]);
        }
    }, [unselectAll]);
    useEffect(() => {
        if (rowInEditMode)
            setEditMode(true);
        updateValues();
    }, [rowInEditMode]);
    useEffect(() => {
        typeof setSelectedRows === "function" && setSelectedRows(selectedIds);
    }, [selectedIds]);
    useEffect(() => {
        if (!editMode) {
            changeRowInEditMode(null);
        }
    }, [editMode]);
    const updateValues = () => {
        var _a;
        let values = [];
        (_a = rows
            .find((row) => row.id === rowInEditMode)) === null || _a === void 0 ? void 0 : _a.items.forEach((rowItem) => {
            var _a;
            return cols[rowItem.colIndex].type === ColumnType.EDIT_TEXT &&
                values.push({
                    jsonFieldName: (_a = cols[rowItem.colIndex].jsonFieldName) !== null && _a !== void 0 ? _a : "",
                    value: rowItem.value,
                });
        });
        setValues(values);
    };
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setEditMode(false);
        }
    };
    const changeSort = (index) => {
        if (currentSortIndex === index)
            toggleSortType();
        else {
            setCurrentSortIndex(index);
            setCurrentSortType(SortType.ASCENDING);
        }
    };
    const toggleSortType = () => {
        setCurrentSortType(currentSortType === SortType.ASCENDING ? SortType.DESCENDING : SortType.ASCENDING);
    };
    const changeRowInEditMode = (rowId) => __awaiter(void 0, void 0, void 0, function* () {
        const currentRow = rows.find((row) => row.id === rowInEditMode);
        if ((currentRow === null || currentRow === void 0 ? void 0 : currentRow.id) === rowId)
            return;
        const update = values.reduce((res, element) => {
            const col = cols.find((col) => col.jsonFieldName === element.jsonFieldName);
            (col === null || col === void 0 ? void 0 : col.inputType) === "date" && element.value ? (res[element.jsonFieldName] = new Date(element.value).toISOString()) : (res[element.jsonFieldName] = element.value);
            return res;
        }, {});
        if (Object.keys(update).length !== 0 && typeof (currentRow === null || currentRow === void 0 ? void 0 : currentRow.onUpdate) === "function" && needUpdate()) {
            yield currentRow.onUpdate(update);
            typeof refresh === "function" && refresh();
        }
        setValues([]);
        setRowInEditMode(rowId);
    });
    const needUpdate = () => {
        const row = rows.find((row) => row.id === rowInEditMode);
        let res = false;
        row === null || row === void 0 ? void 0 : row.items.forEach((rowItem) => {
            const newValue = values.find((value) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName);
            if (newValue && rowItem.value !== newValue.value)
                res = true;
        });
        return res;
    };
    const getHeaderItems = () => {
        const headerItems = [];
        cols.forEach((col, i) => {
            headerItems.push(<HeaderItem title={col.name} onClick={() => changeSort(i)} sortActive={currentSortIndex === i} sortColumn={col.sort} sortType={currentSortType} testId={`col-${i}`}/>);
        });
        selectable &&
            headerItems.push(<HeaderItem>
          <Checkbox data-test={`${dataTest}-select-all`} onValueChange={(value) => {
                    setSelectedAll(value);
                }} isSelected={selectedAll}/>
        </HeaderItem>);
        if (configureButton)
            headerItems.push(<HeaderItem />);
        return headerItems;
    };
    const getRowItems = (row) => {
        const rowItems = [];
        row.items.forEach((rowItem) => {
            rowItems.push(getRowItem(row.id, rowItem));
        });
        return rowItems;
    };
    const getRowItem = (rowId, rowItem) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        switch (cols[rowItem.colIndex].type) {
            case ColumnType.BUTTON:
                return (<RowItem testId={`row-${rows.indexOf((_a = rows.find((row) => row.id === rowId)) !== null && _a !== void 0 ? _a : rows[0])}-item-${rowItem.colIndex}`} id={rowItem.id} key={`${rowId}-${rowItem.colIndex}`} disabled={rowItem.disabled} type={ColumnType.BUTTON} onClick={() => typeof rowItem.onClick === "function" && rowItem.onClick()} title={rowItem.title}/>);
            case ColumnType.CUSTOM:
                return (<RowItem testId={`row-${rows.indexOf((_b = rows.find((row) => row.id === rowId)) !== null && _b !== void 0 ? _b : rows[0])}-item-${rowItem.colIndex}`} key={`${rowId}-${rowItem.colIndex}`} type={ColumnType.CUSTOM} id={rowItem.id}>
            {rowItem.children}
          </RowItem>);
            case ColumnType.EDIT_TEXT:
                return (<RowItem testId={`row-${rows.indexOf((_c = rows.find((row) => row.id === rowId)) !== null && _c !== void 0 ? _c : rows[0])}-item-${rowItem.colIndex}`} id={rowItem.id} inputType={cols[rowItem.colIndex].inputType} maxLines={cols[rowItem.colIndex].maxLines} key={`${rowId}-${rowItem.colIndex}`} type={ColumnType.EDIT_TEXT} editMode={rowId === rowInEditMode} onClick={() => typeof rowItem.onClick === "function" && rowItem.onClick()} onChange={(newValue) => setValues(values.map((value) => cols[rowItem.colIndex].jsonFieldName === value.jsonFieldName ? { jsonFieldName: value.jsonFieldName, value: newValue } : value))} value={(_e = (_d = values === null || values === void 0 ? void 0 : values.find((value) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName && rowInEditMode === rowId)) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : rowItem.value}/>);
            case ColumnType.CHECKBOX:
                return (<RowItem testId={`row-${rows.indexOf((_f = rows.find((row) => row.id === rowId)) !== null && _f !== void 0 ? _f : rows[0])}-item-${rowItem.colIndex}`} id={rowItem.id} key={`${rowId}-${rowItem.colIndex}`} type={ColumnType.CHECKBOX} value={rowItem.value} onChange={(value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)}/>);
            case ColumnType.SWITCH:
                return (<RowItem testId={`row-${rows.indexOf((_g = rows.find((row) => row.id === rowId)) !== null && _g !== void 0 ? _g : rows[0])}-item-${rowItem.colIndex}`} id={rowItem.id} key={`${rowId}-${rowItem.colIndex}`} type={ColumnType.SWITCH} value={rowItem.value} onChange={(value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)} disabled={rowItem.disabled}/>);
            case ColumnType.DROPDOWN:
                return (<RowItem testId={`row-${rows.indexOf((_h = rows.find((row) => row.id === rowId)) !== null && _h !== void 0 ? _h : rows[0])}-item-${rowItem.colIndex}`} id={rowItem.id} key={`${rowId}-${rowItem.colIndex}`} value={rowItem.value} type={ColumnType.DROPDOWN} items={rowItem.items} onChange={(value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)}/>);
            case ColumnType.TEXT:
                return (<RowItem testId={`row-${rows.indexOf((_j = rows.find((row) => row.id === rowId)) !== null && _j !== void 0 ? _j : rows[0])}-item-${rowItem.colIndex}`} key={`${rowId}-${rowItem.colIndex}`} type={ColumnType.TEXT} value={rowItem.value} id={rowItem.id}/>);
            default:
                return (<div data-test={`row-${rows.indexOf((_k = rows.find((row) => row.id === rowId)) !== null && _k !== void 0 ? _k : rows[0])}-item-${rowItem.colIndex}`} key={`${rowId}-${rowItem.colIndex}`}></div>);
        }
    };
    const applySort = (rowA, rowB) => {
        let valueA = rowA.items[currentSortIndex].value;
        let valueB = rowB.items[currentSortIndex].value;
        if (typeof valueA === "string" && typeof valueB === "string") {
            if (!valueA)
                valueA = "";
            if (!valueB)
                valueB = "";
            return stringSort(valueA, valueB);
        }
        if (typeof valueA === "boolean" && typeof valueB === "boolean") {
            return booleanSort(valueA, valueB);
        }
        if (typeof valueA === "number" && typeof valueB === "number") {
            return numberSort(valueA, valueB);
        }
        return 0;
    };
    const stringSort = (stringA, stringB) => {
        if (!stringA || stringA.trim() === "") {
            return currentSortType === SortType.DESCENDING ? 1 : -1;
        }
        if (!stringB || stringB.trim() === "") {
            return currentSortType === SortType.DESCENDING ? -1 : 1;
        }
        if (stringA === stringB)
            return 0;
        if (currentSortType === SortType.DESCENDING) {
            return stringB.toLowerCase() < stringA.toLowerCase() ? -1 : 1;
        }
        else {
            return stringB.toLowerCase() < stringA.toLowerCase() ? 1 : -1;
        }
    };
    const booleanSort = (booleanA, booleanB) => {
        if (currentSortType === SortType.DESCENDING)
            return Number(booleanA) - Number(booleanB);
        else
            return Number(booleanB) - Number(booleanA);
    };
    const numberSort = (numberA, numberB) => {
        if (currentSortType === SortType.ASCENDING)
            return numberA - numberB;
        else
            return numberB - numberA;
    };
    return (<div className="w-max min-w-full flex flex-col relative min-h-[400px] bg-light-secondary dark:bg-dark-secondary rounded-large shadow-small">
      {rows.length === 0 && emptyTableContent && (<div className="absolute top-0 opacity-50 bottom-0 left-0 right-0 flex items-center justify-center text-center">{emptyTableContent}</div>)}
      <table className="table-auto border-separate border-spacing-y-1 bg-light-secondary dark:bg-dark-secondary  p-4 rounded-large " ref={ref} data-test={dataTest}>
        <Header items={getHeaderItems()}/>
        <tbody data-test={`${dataTest}-body`}>
          {rows.sort(applySort).map((row, index) => (<Row rowIndex={index} showLines={showLines} blur={blur} dataTest={`${dataTest}-row-${index}`} id={row.rowId} clickable={row.clickable && typeof row.onClick === "function"} warning={row.warning} danger={row.danger} inactiveState={row.inactive} onSelectedClicked={(selected) => {
                if (selected) {
                    setSelectedIds([...selectedIds, row.id]);
                }
                else {
                    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== row.id));
                }
            }} onRowClicked={() => (row.clickable && typeof row.onClick === "function" ? row.onClick() : changeRowInEditMode(row.id))} selectable={row.selectable} tableSelectable={selectable} selected={selectedAll} key={row.id} rowItems={getRowItems(row)} configurable={configureButton} onConfigureClicked={() => typeof row.onConfigureClicked === "function" && row.onConfigureClicked()}/>))}
        </tbody>
      </table>
    </div>);
};
