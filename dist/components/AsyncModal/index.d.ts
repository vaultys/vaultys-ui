import React from "react";
type UseModalShowReturnType = {
    show: boolean;
    setShow: (value: boolean) => void;
    onHide: () => void;
};
declare const useModalShow: () => UseModalShowReturnType;
type ModalContextType = {
    show: (props: {
        title: string;
        message: string | JSX.Element;
        className?: string;
        acceptText?: string;
        declineText?: string;
        validationMessage?: string;
        type?: "password" | "confirm" | "validate" | "info";
    }) => Promise<string>;
};
type InputModalContextProviderProps = {
    children: React.ReactNode;
};
declare const InputModalContextProvider: React.FC<InputModalContextProviderProps>;
declare const useInputModalContext: () => ModalContextType;
export { useModalShow, useInputModalContext, InputModalContextProvider };
