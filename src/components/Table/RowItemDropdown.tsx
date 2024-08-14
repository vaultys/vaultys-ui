"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";

export interface RowItemDropdownProps {
  value: string;
  items: string[];
  onChange: (value: string) => void;
}

export const RowItemDropdown: React.FC<RowItemDropdownProps> = ({ value, items, onChange }) => {
  return (
    <Dropdown className="bg-light dark:bg-dark">
      <DropdownTrigger>
        <Button endContent={<IoMdArrowDropdown />} variant="bordered">
          {value}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {items.map((item) => (
          <DropdownItem onPress={() => onChange(item)}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
