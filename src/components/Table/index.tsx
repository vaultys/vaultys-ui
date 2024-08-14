"use client";
import React, { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { Row } from "./Row";
import { HeaderItem } from "./HeaderItem";
import { RowItem } from "./RowItem";
import { Checkbox } from "@nextui-org/react";

export enum SortType {
  ASCENDING,
  DESCENDING,
}

export enum ColumnType {
  STRING,
  EDIT_TEXT,
  BUTTON,
  CUSTOM,
  CHECKBOX,
  SWITCH,
  TEXT,
  DROPDOWN,
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

export const Table: React.FC<TableProps> = ({
  cols,
  rows,
  setSelectedRows,
  refresh,
  configureButton = false,
  selectable = true,
  dataTest,
  blur = false,
  unselectAll,
  emptyTableContent,
  showLines,
}) => {
  const [selectedAll, setSelectedAll] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [rowInEditMode, setRowInEditMode] = useState<string | null>();
  const [currentSortIndex, setCurrentSortIndex] = useState<number>(cols.indexOf(cols.find((col: TableColumn) => col.sort) ?? cols[0]));
  const [currentSortType, setCurrentSortType] = useState<SortType>(SortType.ASCENDING);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [values, setValues] = useState<{ jsonFieldName: string; value: string }[]>([]);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    selectedAll ? setSelectedIds(rows.filter((row: TableRow) => row.selectable).map((row: TableRow) => row.id)) : setSelectedIds([]);
  }, [selectedAll]);

  useEffect(() => {
    if (unselectAll) {
      setSelectedAll(false);
      setSelectedIds([]);
    }
  }, [unselectAll]);

  useEffect(() => {
    if (rowInEditMode) setEditMode(true);
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
    let values: { jsonFieldName: string; value: string }[] = [];
    rows
      .find((row: TableRow) => row.id === rowInEditMode)
      ?.items.forEach(
        (rowItem: RowItem) =>
          cols[rowItem.colIndex].type === ColumnType.EDIT_TEXT &&
          values.push({
            jsonFieldName: cols[rowItem.colIndex].jsonFieldName ?? "",
            value: rowItem.value as string,
          }),
      );
    setValues(values);
  };

  const handleClickOutside = (event: any) => {
    if (ref.current && !(ref.current as any).contains(event.target)) {
      setEditMode(false);
    }
  };

  const changeSort = (index: number) => {
    if (currentSortIndex === index) toggleSortType();
    else {
      setCurrentSortIndex(index);
      setCurrentSortType(SortType.ASCENDING);
    }
  };

  const toggleSortType = () => {
    setCurrentSortType(currentSortType === SortType.ASCENDING ? SortType.DESCENDING : SortType.ASCENDING);
  };

  const changeRowInEditMode = async (rowId: string | null) => {
    const currentRow = rows.find((row: TableRow) => row.id === rowInEditMode);
    if (currentRow?.id === rowId) return;
    const update = values.reduce((res: any, element) => {
      const col = cols.find((col: TableColumn) => col.jsonFieldName === element.jsonFieldName);
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
    const row = rows.find((row: TableRow) => row.id === rowInEditMode);
    let res = false;
    row?.items.forEach((rowItem: RowItem) => {
      const newValue = values.find((value: { jsonFieldName: string; value: string }) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName);
      if (newValue && rowItem.value !== newValue.value) res = true;
    });

    return res;
  };

  const getHeaderItems = () => {
    const headerItems: ReactElement[] = [];
    cols.forEach((col: TableColumn, i: number) => {
      headerItems.push(<HeaderItem title={col.name} onClick={() => changeSort(i)} sortActive={currentSortIndex === i} sortColumn={col.sort} sortType={currentSortType} testId={`col-${i}`} />);
    });
    selectable &&
      headerItems.push(
        <HeaderItem>
          <Checkbox
            data-test={`${dataTest}-select-all`}
            onValueChange={(value: boolean) => {
              setSelectedAll(value);
            }}
            isSelected={selectedAll}
          />
        </HeaderItem>,
      );
    if (configureButton) headerItems.push(<HeaderItem />);
    return headerItems;
  };

  const getRowItems = (row: TableRow) => {
    const rowItems: ReactElement[] = [];
    row.items.forEach((rowItem: RowItem) => {
      rowItems.push(getRowItem(row.id, rowItem));
    });
    return rowItems;
  };

  const getRowItem = (rowId: string, rowItem: RowItem) => {
    switch (cols[rowItem.colIndex].type) {
      case ColumnType.BUTTON:
        return (
          <RowItem
            testId={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`}
            id={rowItem.id}
            key={`${rowId}-${rowItem.colIndex}`}
            disabled={rowItem.disabled}
            type={ColumnType.BUTTON}
            onClick={() => typeof rowItem.onClick === "function" && rowItem.onClick()}
            title={rowItem.title}
          />
        );

      case ColumnType.CUSTOM:
        return (
          <RowItem
            testId={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`}
            key={`${rowId}-${rowItem.colIndex}`}
            type={ColumnType.CUSTOM}
            id={rowItem.id}
          >
            {rowItem.children}
          </RowItem>
        );

      case ColumnType.EDIT_TEXT:
        return (
          <RowItem
            testId={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`}
            id={rowItem.id}
            inputType={cols[rowItem.colIndex].inputType}
            maxLines={cols[rowItem.colIndex].maxLines}
            key={`${rowId}-${rowItem.colIndex}`}
            type={ColumnType.EDIT_TEXT}
            editMode={rowId === rowInEditMode}
            onClick={() => typeof rowItem.onClick === "function" && rowItem.onClick()}
            onChange={(newValue) =>
              setValues(
                values.map((value: { jsonFieldName: string; value: string }) =>
                  cols[rowItem.colIndex].jsonFieldName === value.jsonFieldName ? { jsonFieldName: value.jsonFieldName, value: newValue as string } : value,
                ),
              )
            }
            value={values?.find((value: { jsonFieldName: string; value: string }) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName && rowInEditMode === rowId)?.value ?? rowItem.value}
          />
        );

      case ColumnType.CHECKBOX:
        return (
          <RowItem
            testId={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`}
            id={rowItem.id}
            key={`${rowId}-${rowItem.colIndex}`}
            type={ColumnType.CHECKBOX}
            value={rowItem.value}
            onChange={(value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)}
          />
        );

      case ColumnType.SWITCH:
        return (
          <RowItem
            testId={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`}
            id={rowItem.id}
            key={`${rowId}-${rowItem.colIndex}`}
            type={ColumnType.SWITCH}
            value={rowItem.value}
            onChange={(value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)}
            disabled={rowItem.disabled}
          />
        );

      case ColumnType.DROPDOWN:
        return (
          <RowItem
            testId={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`}
            id={rowItem.id}
            key={`${rowId}-${rowItem.colIndex}`}
            value={rowItem.value}
            type={ColumnType.DROPDOWN}
            items={rowItem.items}
            onChange={(value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)}
          />
        );

      case ColumnType.TEXT:
        return (
          <RowItem
            testId={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`}
            key={`${rowId}-${rowItem.colIndex}`}
            type={ColumnType.TEXT}
            value={rowItem.value}
            id={rowItem.id}
          />
        );

      default:
        return <div data-test={`row-${rows.indexOf(rows.find((row) => row.id === rowId) ?? rows[0])}-item-${rowItem.colIndex}`} key={`${rowId}-${rowItem.colIndex}`}></div>;
    }
  };

  const applySort = (rowA: TableRow, rowB: TableRow) => {
    let valueA = rowA.items[currentSortIndex].value;
    let valueB = rowB.items[currentSortIndex].value;

    if (typeof valueA === "string" && typeof valueB === "string") {
      if (!valueA) valueA = "";
      if (!valueB) valueB = "";
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

  const stringSort = (stringA: string, stringB: string) => {
    if (!stringA || stringA.trim() === "") {
      return currentSortType === SortType.DESCENDING ? 1 : -1;
    }

    if (!stringB || stringB.trim() === "") {
      return currentSortType === SortType.DESCENDING ? -1 : 1;
    }
    if (stringA === stringB) return 0;
    if (currentSortType === SortType.DESCENDING) {
      return stringB.toLowerCase() < stringA.toLowerCase() ? -1 : 1;
    } else {
      return stringB.toLowerCase() < stringA.toLowerCase() ? 1 : -1;
    }
  };

  const booleanSort = (booleanA: boolean, booleanB: boolean) => {
    if (currentSortType === SortType.DESCENDING) return Number(booleanA) - Number(booleanB);
    else return Number(booleanB) - Number(booleanA);
  };

  const numberSort = (numberA: number, numberB: number) => {
    if (currentSortType === SortType.ASCENDING) return numberA - numberB;
    else return numberB - numberA;
  };

  return (
    <div className="w-max min-w-full flex flex-col relative min-h-[400px] bg-red-400 bg-light-secondary dark:bg-dark-secondary rounded-large shadow-small">
      {rows.length === 0 && emptyTableContent && <div className="absolute top-0 opacity-50 bottom-0 left-0 right-0 flex items-center justify-center text-center">{emptyTableContent}</div>}
      <table className="table-auto border-separate border-spacing-y-1 bg-light-secondary dark:bg-dark-secondary  p-4 rounded-large " ref={ref} data-test={dataTest}>
        <Header items={getHeaderItems()} />
        <tbody data-test={`${dataTest}-body`}>
          {rows.sort(applySort).map((row: TableRow, index: number) => (
            <Row
              rowIndex={index}
              showLines={showLines}
              blur={blur}
              dataTest={`${dataTest}-row-${index}`}
              id={row.rowId}
              clickable={row.clickable && typeof row.onClick === "function"}
              warning={row.warning}
              danger={row.danger}
              inactiveState={row.inactive}
              onSelectedClicked={(selected: boolean) => {
                if (selected) {
                  setSelectedIds([...selectedIds, row.id]);
                } else {
                  setSelectedIds(selectedIds.filter((selectedId) => selectedId !== row.id));
                }
              }}
              onRowClicked={() => (row.clickable && typeof row.onClick === "function" ? row.onClick() : changeRowInEditMode(row.id))}
              selectable={row.selectable}
              tableSelectable={selectable}
              selected={selectedAll}
              key={row.id}
              rowItems={getRowItems(row)}
              configurable={configureButton}
              onConfigureClicked={() => typeof row.onConfigureClicked === "function" && row.onConfigureClicked()}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
