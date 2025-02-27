"use client";

import { Switch } from "@heroui/react";

export interface RowItemSwitchProps {
  check: boolean;
  name?: string;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const RowItemSwitch: React.FC<RowItemSwitchProps> = ({ check, name, onChange, disabled }) => {
  return (
    <Switch
      name={name}
      defaultSelected={check}
      onValueChange={(checked: boolean) => typeof onChange === "function" && onChange(checked)}
      isDisabled={disabled}
      classNames={{
        wrapper: "group-data-[selected=true]:bg-modern-blue",
      }}
    />
  );
};
