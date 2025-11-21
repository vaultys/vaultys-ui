var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ConfirmModalContextProvider, useConfirmModal } from "./index";
import { Button } from "@heroui/react";
// Meta information for the component
const meta = {
    title: "Components/ConfirmModal",
    component: ConfirmModalContextProvider,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
// Wrapper component to trigger the modal in stories
const ModalTrigger = ({ header, customContent, alert, alertDescription, cancelText, acceptText, color, buttonText }) => {
    const { show } = useConfirmModal();
    const handleClick = () => __awaiter(void 0, void 0, void 0, function* () {
        const confirmed = yield show({
            header,
            customContent,
            alert,
            alertDescription,
            cancelText,
            acceptText,
            color,
        });
        console.log("User confirmed:", confirmed);
    });
    return _jsx(Button, { onClick: handleClick, children: buttonText });
};
// Base story template
export const Default = {
    render: () => (_jsx(ConfirmModalContextProvider, { children: _jsx(ModalTrigger, { header: "Confirm Action", alert: "Are you sure you want to proceed?", buttonText: "Show Default Modal" }) })),
};
export const WithDescription = {
    render: () => (_jsx(ConfirmModalContextProvider, { children: _jsx(ModalTrigger, { header: "Delete Item", alert: "Are you sure you want to delete this item?", alertDescription: "This action cannot be undone.", buttonText: "Show Modal with Description" }) })),
};
export const DangerModal = {
    render: () => (_jsx(ConfirmModalContextProvider, { children: _jsx(ModalTrigger, { header: "Delete Account", alert: "Warning: You are about to delete your account", alertDescription: "All your data will be permanently removed. This action cannot be undone.", color: "danger", acceptText: "Delete Account", buttonText: "Show Danger Modal" }) })),
};
export const SuccessModal = {
    render: () => (_jsx(ConfirmModalContextProvider, { children: _jsx(ModalTrigger, { header: "Confirm Publish", alert: "Your document is ready to be published", alertDescription: "Once published, it will be visible to all users.", color: "success", acceptText: "Publish", buttonText: "Show Success Modal" }) })),
};
export const WithCustomContent = {
    render: () => {
        const CustomContent = () => (_jsxs("div", { className: "p-4 bg-gray-100 rounded-sm", children: [_jsx("h4", { className: "text-lg font-semibold", children: "Custom Form Content" }), _jsx("p", { className: "my-2", children: "This is an example of custom content inside the modal." }), _jsx("div", { className: "mt-2 p-2 bg-white rounded-sm", children: "You can add any React components here." })] }));
        return (_jsx(ConfirmModalContextProvider, { children: _jsx(ModalTrigger, { header: "Modal with Custom Content", customContent: _jsx(CustomContent, {}), alert: "Please confirm after reviewing the details above", buttonText: "Show Modal with Custom Content" }) }));
    },
};
export const MultipleModals = {
    render: () => (_jsx(ConfirmModalContextProvider, { children: _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(ModalTrigger, { header: "Information", alert: "This is an informational message", color: "info", buttonText: "Info Modal" }), _jsx(ModalTrigger, { header: "Warning", alert: "This is a warning message", color: "warning", buttonText: "Warning Modal" }), _jsx(ModalTrigger, { header: "Secondary Action", alert: "Confirm this secondary action", color: "secondary", buttonText: "Secondary Modal" })] }) })),
};
