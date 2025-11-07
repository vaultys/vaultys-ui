import React, { ReactElement } from "react";
type ConfirmModalContextType = {
    show: (props: {
        header: string | ReactElement;
        customContent?: ReactElement;
        alert: string;
        alertDescription?: string;
        cancelText?: string;
        acceptText?: string;
        cancelIcon?: ReactElement;
        acceptIcon?: ReactElement;
        color?: "default" | "success" | "warning" | "danger" | "primary" | "secondary" | "info";
    }) => Promise<boolean>;
};
declare function ConfirmModalContextProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare const useConfirmModal: () => ConfirmModalContextType;
export { useConfirmModal, ConfirmModalContextProvider };
