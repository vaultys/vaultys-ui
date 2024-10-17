"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
export const RowItemDropdown = ({ value, items, onChange }) => {
    return (<Dropdown className="bg-light dark:bg-dark">
      <DropdownTrigger>
        <Button endContent={<IoMdArrowDropdown />} variant="bordered">
          {value}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {items.map((item) => (<DropdownItem onPress={() => onChange(item)}>{item}</DropdownItem>))}
      </DropdownMenu>
    </Dropdown>);
};
