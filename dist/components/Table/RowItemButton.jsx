"use client";
import { Button } from "@nextui-org/react";
export const RowItemButton = ({ title, onClick, disabled = false }) => {
    return (<Button color="primary" disabled={disabled} onClick={(e) => {
            e.stopPropagation();
            if (!disabled)
                onClick();
        }}>
      {title}
    </Button>);
};
