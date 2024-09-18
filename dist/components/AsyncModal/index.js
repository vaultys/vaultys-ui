import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext, useRef, useState } from "react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { InputPassword } from "../InputPassword";
const useModalShow = () => {
    const [show, setShow] = useState(false);
    const handleOnHide = () => {
        setShow(false);
    };
    return {
        show,
        setShow,
        onHide: handleOnHide,
    };
};
const InputModalContext = React.createContext({});
const InputModalContextProvider = (props) => {
    const [content, setContent] = useState();
    const [val, setVal] = useState("");
    const [confirmationMessageInvalid, setConfirmationMessageInvalid] = useState(false);
    const resolver = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    const handleShow = (props) => {
        var _a, _b, _c, _d;
        setContent(Object.assign(Object.assign({}, props), { className: (_a = props.className) !== null && _a !== void 0 ? _a : "", acceptText: (_b = props.acceptText) !== null && _b !== void 0 ? _b : "OK", declineText: (_c = props.declineText) !== null && _c !== void 0 ? _c : "Cancel", type: (_d = props.type) !== null && _d !== void 0 ? _d : "validate" }));
        onOpen();
        return new Promise(function (resolve) {
            resolver.current = resolve;
        });
    };
    const modalContext = {
        show: handleShow,
    };
    const handleOk = () => {
        if ((content === null || content === void 0 ? void 0 : content.type) === "confirm") {
            if (val !== content.validationMessage)
                return setConfirmationMessageInvalid(true);
            else {
                setVal("");
                resolver.current && resolver.current(true);
                return onClose();
            }
        }
        resolver.current && resolver.current((content === null || content === void 0 ? void 0 : content.type) === "validate" ? true : val);
        setVal("");
        onClose();
    };
    const handleCancel = () => {
        resolver.current && resolver.current(false);
        setVal("");
        onClose();
    };
    return (_jsxs(InputModalContext.Provider, { value: modalContext, children: [props.children, content && (_jsx(Modal, { isOpen: isOpen, onClose: onClose, backdrop: "blur", className: content.className, classNames: {
                    base: "bg-light dark:bg-dark text-black dark:text-white",
                }, children: _jsxs(ModalContent, { children: [_jsx(ModalHeader, { className: "flex flex-col items-center", children: content.title }), _jsxs(ModalBody, { className: "items-center gap-8", children: [_jsx("div", { children: content.message }), content.type === "password" && _jsx(InputPassword, { label: "", testId: "confirm-dialog-input", placeholder: content.placeholder, onChange: (value) => setVal(value), value: val }), content.type === "confirm" && (_jsx(Input, { isInvalid: confirmationMessageInvalid, "data-test": "confirm-dialog-input", placeholder: content.placeholder, onValueChange: (value) => setVal(value), value: val, classNames: {
                                        inputWrapper: "bg-light-secondary dark:bg-dark-secondary",
                                    } }))] }), _jsxs(ModalFooter, { children: [_jsx(Button, { color: "success", className: "text-white", onPress: () => handleOk(), "data-test": "confirm-dialog-accept", children: _jsx("span", { className: "text-ellipsis truncate ...", children: content.acceptText }) }), content.type !== "info" && (_jsx(Button, { color: "danger", className: "text-white", onPress: () => handleCancel(), "data-test": "confirm-dialog-deny", children: _jsx("span", { className: "text-ellipsis truncate ...", children: content.declineText }) }))] })] }) }))] }));
};
const useInputModalContext = () => useContext(InputModalContext);
export { useModalShow, useInputModalContext, InputModalContextProvider };
