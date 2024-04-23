"use client";

import { Button } from "@nextui-org/react";

export interface RowItemButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export const RowItemButton: React.FC<RowItemButtonProps> = ({ title, onClick, disabled = false }) => {
  return (
    <Button
      color="primary"
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) onClick();
      }}
    >
      {title}
    </Button>
  );
};
