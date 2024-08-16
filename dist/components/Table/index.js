"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
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
    const [selectedAll, setSelectedAll] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [rowInEditMode, setRowInEditMode] = useState();
    const [currentSortIndex, setCurrentSortIndex] = useState(cols.indexOf(cols.find((col) => col.sort) ?? cols[0]));
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
        let values = [];
        rows
            .find((row) => row.id === rowInEditMode)
            ?.items.forEach((rowItem) => cols[rowItem.colIndex].type === ColumnType.EDIT_TEXT &&
            values.push({
                jsonFieldName: cols[rowItem.colIndex].jsonFieldName ?? "",
                value: rowItem.value,
            }));
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
    const changeRowInEditMode = async (rowId) => {
        const currentRow = rows.find((row) => row.id === rowInEditMode);
        if (currentRow?.id === rowId)
            return;
        const update = values.reduce((res, element) => {
            const col = cols.find((col) => col.jsonFieldName === element.jsonFieldName);
            col?.inputType === "date" && element.value ? (res[element.jsonFieldName] = new Date(element.value).toISOString()) : (res[element.jsonFieldName] = element.value);
            return res;
        }, {});
        if (Object.keys(update).length !== 0 && typeof currentRow?.onUpdate === "function" && needUpdate()) {
            await currentRow.onUpdate(update);
            typeof refresh === "function" && refresh();
        }
        setValues([]);
        setRowInEditMode(rowId);
    };
    const needUpdate = () => {
        const row = rows.find((row) => row.id === rowInEditMode);
        let res = false;
        row?.items.forEach((rowItem) => {
            const newValue = values.find((value) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName);
            if (newValue && rowItem.value !== newValue.value)
                res = true;
        });
        return res;
    };
    const getHeaderItems = () => {
        const headerItems = [];
        cols.forEach((col, i) => {
            headerItems.push(_jsx(HeaderItem, { title: col.name, onClick: () => changeSort(i), sortActive: currentSortIndex === i, sortColumn: col.sort, sortType: currentSortType, testId: `col-${i}` }));
        });
        selectable &&
            headerItems.push(_jsx(HeaderItem, { children: _jsx(Checkbox, { "data-test": `${dataTest}-select-all`, onValueChange: (value) => {
                        setSelectedAll(value);
                    }, isSelected: selectedAll }) }));
        if (configureButton)
            headerItems.push(_jsx(HeaderItem, {}));
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
        switch (cols[rowItem.colIndex].type) {
            case ColumnType.BUTTON:
                return (_jsx(RowItem, { testId: `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`, id: rowItem.id, disabled: rowItem.disabled, type: ColumnType.BUTTON, onClick: () => typeof rowItem.onClick === "function" && rowItem.onClick(), title: rowItem.title }, `${rowId}-${rowItem.colIndex}`));
            case ColumnType.CUSTOM:
                return (_jsx(RowItem, { testId: `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`, type: ColumnType.CUSTOM, id: rowItem.id, children: rowItem.children }, `${rowId}-${rowItem.colIndex}`));
            case ColumnType.EDIT_TEXT:
                return (_jsx(RowItem, { testId: `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`, id: rowItem.id, inputType: cols[rowItem.colIndex].inputType, maxLines: cols[rowItem.colIndex].maxLines, type: ColumnType.EDIT_TEXT, editMode: rowId === rowInEditMode, onClick: () => typeof rowItem.onClick === "function" && rowItem.onClick(), onChange: (newValue) => setValues(values.map((value) => cols[rowItem.colIndex].jsonFieldName === value.jsonFieldName ? { jsonFieldName: value.jsonFieldName, value: newValue } : value)), value: values?.find((value) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName && rowInEditMode === rowId)?.value ?? rowItem.value }, `${rowId}-${rowItem.colIndex}`));
            case ColumnType.CHECKBOX:
                return (_jsx(RowItem, { testId: `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`, id: rowItem.id, type: ColumnType.CHECKBOX, value: rowItem.value, onChange: (value) => typeof rowItem.onChange === "function" && rowItem.onChange(value) }, `${rowId}-${rowItem.colIndex}`));
            case ColumnType.SWITCH:
                return (_jsx(RowItem, { testId: `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`, id: rowItem.id, type: ColumnType.SWITCH, value: rowItem.value, onChange: (value) => typeof rowItem.onChange === "function" && rowItem.onChange(value), disabled: rowItem.disabled }, `${rowId}-${rowItem.colIndex}`));
            case ColumnType.DROPDOWN:
                return (_jsx(RowItem, { testId: `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`, id: rowItem.id, value: rowItem.value, type: ColumnType.DROPDOWN, items: rowItem.items, onChange: (value) => typeof rowItem.onChange === "function" && rowItem.onChange(value) }, `${rowId}-${rowItem.colIndex}`));
            case ColumnType.TEXT:
                return (_jsx(RowItem, { testId: `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`, type: ColumnType.TEXT, value: rowItem.value, id: rowItem.id }, `${rowId}-${rowItem.colIndex}`));
            default:
                return _jsx("div", { "data-test": `row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}` }, `${rowId}-${rowItem.colIndex}`);
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
    return (_jsxs("div", { className: "w-max min-w-full flex flex-col relative min-h-[400px] bg-red-400 bg-light-secondary dark:bg-dark-secondary rounded-large shadow-small", children: [rows.length === 0 && emptyTableContent && _jsx("div", { className: "absolute top-0 opacity-50 bottom-0 left-0 right-0 flex items-center justify-center text-center", children: emptyTableContent }), _jsxs("table", { className: "table-auto border-separate border-spacing-y-1 bg-light-secondary dark:bg-dark-secondary  p-4 rounded-large ", ref: ref, "data-test": dataTest, children: [_jsx(Header, { items: getHeaderItems() }), _jsx("tbody", { "data-test": `${dataTest}-body`, children: rows.sort(applySort).map((row, index) => (_jsx(Row, { rowIndex: index, showLines: showLines, blur: blur, dataTest: `${dataTest}-row-${index}`, id: row.rowId, clickable: row.clickable && typeof row.onClick === "function", warning: row.warning, danger: row.danger, inactiveState: row.inactive, onSelectedClicked: (selected) => {
                                if (selected) {
                                    setSelectedIds([...selectedIds, row.id]);
                                }
                                else {
                                    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== row.id));
                                }
                            }, onRowClicked: () => (row.clickable && typeof row.onClick === "function" ? row.onClick() : changeRowInEditMode(row.id)), selectable: row.selectable, tableSelectable: selectable, selected: selectedAll, rowItems: getRowItems(row), configurable: configureButton, onConfigureClicked: () => typeof row.onConfigureClicked === "function" && row.onConfigureClicked() }, row.id))) })] })] }));
};
