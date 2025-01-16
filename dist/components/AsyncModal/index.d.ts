import React, { ReactElement } from "react";
type UseModalShowReturnType = {
    show: boolean;
    setShow: (value: boolean) => void;
    onHide: () => void;
};
declare const useModalShow: () => UseModalShowReturnType;
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
    }) => Promise<string>;
};
type InputModalContextProviderProps = {
    children: React.ReactNode;
};
declare const InputModalContextProvider: React.FC<InputModalContextProviderProps>;
declare const useInputModalContext: () => ModalContextType;
export { useModalShow, useInputModalContext, InputModalContextProvider };
