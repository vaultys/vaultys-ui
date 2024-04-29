"use client";
import { ReactElement } from "react";
import { RowItemButton } from "./RowItemButton";
import { RowItemEditText } from "./RowItemEditText";
import { RowItemSpan } from "./RowItemSpan";
import { RowItemSwitch } from "./RowItemSwitch";
import { ColumnType } from ".";
import { RowItemDropdown } from "./RowItemDropdown";
import { Checkbox } from "@nextui-org/react";

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

export const RowItem: React.FC<RowItemProps> = ({
  type,
  value,
  title,
  editMode,
  items,
  onChange,
  onClick,
  className,
  children,
  disabled = false,
  maxLines,
  inputType = "text",
  id,
  testId,
}) => {
  const getChild = () => {
    switch (type) {
      case ColumnType.BUTTON:
        return <RowItemButton onClick={() => typeof onClick === "function" && onClick()} title={title ?? ""} disabled={disabled} />;

      case ColumnType.CHECKBOX:
        return <Checkbox onValueChange={(value) => typeof onChange === "function" && onChange(value)} isSelected={value as boolean} isDisabled={disabled} />;

      case ColumnType.EDIT_TEXT:
        return (
          <RowItemEditText
            inputType={inputType}
            maxLines={maxLines}
            onClick={() => typeof onClick === "function" && onClick()}
            editMode={editMode ?? false}
            onChange={(value: string) => typeof onChange === "function" && onChange(value)}
            value={value as string}
          />
        );

      case ColumnType.CUSTOM:
        return children;

      case ColumnType.SWITCH:
        return <RowItemSwitch check={value as boolean} disabled={disabled} onChange={(checked: boolean) => onChange && onChange(checked)} />;

      case ColumnType.TEXT:
        return <RowItemSpan value={(value as string) ?? title} />;

      case ColumnType.DROPDOWN:
        return <RowItemDropdown value={value as string} items={items ?? []} onChange={(value: string) => onChange && onChange(value)} />;

      default:
        return <></>;
    }
  };

  return (
    <td
      className={` vui-px-2 first:vui-rounded-l-lg rtl:first:vui-rounded-r-lg rtl:first:vui-rounded-l-[unset] last:vui-rounded-r-lg rtl:last:vui-rounded-l-lg rtl:last:vui-rounded-r-[unset] ${className}`}
      id={id}
      data-test={testId}
    >
      {getChild()}
    </td>
  );
};
