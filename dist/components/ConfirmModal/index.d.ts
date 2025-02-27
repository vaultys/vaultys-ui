import { ReactElement } from "react";
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
export declare function ConfirmModalContextProvider(props: any): import("react/jsx-runtime").JSX.Element;
declare const useConfirmModal: () => ConfirmModalContextType;
export { useConfirmModal };
