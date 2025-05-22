import { ReactElement } from "react";
type ModalContextType = {
    show: (props: {
        title: string;
        message: string | ReactElement;
        className?: string;
        acceptText?: string;
        declineText?: string;
        validationMessage?: string;
        placeholder?: string;
        type?: "password" | "confirm" | "validate" | "info";
        customContent?: ReactElement;
    }) => Promise<string>;
};
declare function InputModalContextProvider(props: any): import("react/jsx-runtime").JSX.Element;
declare const useInputModalContext: () => ModalContextType;
export { useInputModalContext, InputModalContextProvider };
