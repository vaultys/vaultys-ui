import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext, useRef, useState } from "react";
import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";
const ConfirmModalContext = React.createContext({});
export function ConfirmModalContextProvider(props) {
    var _a, _b, _c, _d;
    const [content, setContent] = useState(null);
    const resolver = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    const handleShow = (props) => {
        var _a, _b, _c;
        setContent(Object.assign(Object.assign({}, props), { cancelText: (_a = props.cancelText) !== null && _a !== void 0 ? _a : "Cancel", acceptText: (_b = props.acceptText) !== null && _b !== void 0 ? _b : "Confirm", color: (_c = props.color) !== null && _c !== void 0 ? _c : "default" }));
        onOpen();
        return new Promise(function (resolve) {
            resolver.current = resolve;
        });
    };
    const handleAccept = () => {
        resolver.current && resolver.current(true);
        onClose();
    };
    const handleCancel = () => {
        resolver.current && resolver.current(false);
        onClose();
    };
    const modalContext = {
        show: handleShow,
    };
    // Color mappings for alert box styling
    const getAlertStyles = (color) => {
        const styles = {
            default: {
                bg: "",
                text: "text-default-700",
                border: "!border-0",
            },
            success: {
                bg: "bg-success-50",
                text: "text-success-700",
                border: "border-success-200",
            },
            warning: {
                bg: "bg-warning-50",
                text: "text-warning-700",
                border: "border-warning-200",
            },
            danger: {
                bg: "bg-danger-50",
                text: "text-danger-700",
                border: "border-danger-200",
            },
            primary: {
                bg: "bg-primary-50",
                text: "text-primary-700",
                border: "border-primary-200",
            },
            secondary: {
                bg: "bg-secondary-50",
                text: "text-secondary-700",
                border: "border-secondary-200",
            },
            info: {
                bg: "bg-focus-50",
                text: "text-focus-700",
                border: "border-focus-200",
            },
        };
        return styles[color] || styles.default;
    };
    // Get button color, handling special case for "info"
    const getButtonColor = (color) => {
        return color === "info" ? "default" : color;
    };
    return (_jsxs(ConfirmModalContext.Provider, { value: modalContext, children: [props.children, content && (_jsx(Modal, { isOpen: isOpen, onClose: handleCancel, backdrop: "blur", classNames: {
                    base: "bg-background",
                    header: "border-b border-divider",
                    body: "py-6",
                    footer: "border-t border-divider",
                }, children: _jsxs(ModalContent, { children: [_jsx(ModalHeader, { className: "flex flex-col gap-1", children: typeof content.header === "string" ? _jsx("h3", { className: "text-xl font-semibold", children: content.header }) : content.header }), _jsxs(ModalBody, { children: [content.customContent && (_jsxs(_Fragment, { children: [content.customContent, _jsx(Divider, { className: "my-4" })] })), content.alert && (_jsxs("div", { className: `${getAlertStyles((_a = content.color) !== null && _a !== void 0 ? _a : "default").bg} ${getAlertStyles((_b = content.color) !== null && _b !== void 0 ? _b : "default").text} p-4 rounded-lg border ${getAlertStyles((_c = content.color) !== null && _c !== void 0 ? _c : "primary").border}`, children: [_jsx("p", { className: "font-medium", children: content.alert }), content.alertDescription && _jsx("p", { className: "mt-1 text-sm", children: content.alertDescription })] }))] }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "flat", color: "default", onPress: handleCancel, startContent: content.cancelIcon, "data-test": "confirm-dialog-deny", children: content.cancelText }), _jsx(Button, { color: getButtonColor((_d = content.color) !== null && _d !== void 0 ? _d : "primary"), onPress: handleAccept, startContent: content.acceptIcon, "data-test": "confirm-dialog-accept", className: `${content.color === "info" && "bg-modern-blue"}`, children: content.acceptText })] })] }) }))] }));
}
const useConfirmModal = () => useContext(ConfirmModalContext);
export { useConfirmModal };
