import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { BsLock } from "@react-icons/all-files/bs/BsLock";
import { BsXCircle } from "@react-icons/all-files/bs/BsXCircle";
import { BsCreditCard } from "@react-icons/all-files/bs/BsCreditCard";
import { BsFileText } from "@react-icons/all-files/bs/BsFileText";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { Button, Input, Select, Checkbox, Modal, Textarea, ModalHeader, ModalBody, ModalFooter, ModalContent, SelectItem } from "@heroui/react";
const fieldTypes = [
    { value: "text", label: "Text" },
    { value: "password", label: "Password" },
    { value: "email", label: "Email" },
    { value: "url", label: "URL" },
    { value: "creditCard", label: "Credit Card", icon: _jsx(BsCreditCard, { className: "text-lg" }) },
    { value: "totp", label: "TOTP", icon: _jsx(BsLock, { className: "text-lg" }) },
    { value: "backupCodes", label: "Backup Codes", icon: _jsx(BsFileText, { className: "text-lg" }) },
    { value: "address", label: "Address", icon: _jsx(BsMap, { className: "text-lg" }) },
];
export function SecureInfoForm() {
    const [customFields, setCustomFields] = useState([]);
    const [creditCardError, setCreditCardError] = useState(null);
    const [totpKey, setTotpKey] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(null);
    const addCustomField = (type) => {
        const id = Math.random().toString(36).substr(2, 9);
        let newField = { id, type, key: type, value: "" };
        switch (type) {
            case "creditCard":
                newField.key = "Credit Card";
                break;
            case "totp":
                newField.key = "TOTP";
                break;
            case "backupCodes":
                newField.key = "Backup Codes";
                break;
            case "address":
                newField.key = "Address";
                break;
            default:
                newField.key = `Custom ${type}`;
        }
        setCustomFields([...customFields, newField]);
    };
    const updateCustomField = (id, key, value) => {
        setCustomFields(customFields.map((field) => (field.id === id ? Object.assign(Object.assign({}, field), { key, value }) : field)));
    };
    const removeCustomField = (id) => {
        const fieldToRemove = customFields.find((field) => field.id === id);
        if (fieldToRemove && fieldToRemove.value) {
            setShowConfirmation(id);
        }
        else {
            setCustomFields(customFields.filter((field) => field.id !== id));
        }
    };
    const confirmRemoveField = () => {
        if (showConfirmation) {
            setCustomFields(customFields.filter((field) => field.id !== showConfirmation));
            setShowConfirmation(null);
        }
    };
    const validateCreditCard = (value) => {
        let sum = 0;
        let isEven = false;
        for (let i = value.length - 1; i >= 0; i--) {
            let digit = parseInt(value.charAt(i), 10);
            if (isEven) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            isEven = !isEven;
        }
        return sum % 10 === 0;
    };
    const handleCreditCardChange = (value) => {
        if (value && !validateCreditCard(value)) {
            setCreditCardError("Invalid credit card number");
        }
        else {
            setCreditCardError(null);
        }
    };
    const generateTOTPKey = () => {
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        setTotpKey(key.toUpperCase());
    };
    const renderCustomField = (field) => {
        return (_jsxs("div", { className: "relative mb-4 dark:bg-dark dark:text-white", children: [_jsx(Input, { type: field.type === "creditCard" ? "text" : field.type, label: field.key, value: field.value, onChange: (e) => {
                        updateCustomField(field.id, field.key, e.target.value);
                        if (field.type === "creditCard") {
                            handleCreditCardChange(e.target.value);
                        }
                    }, color: field.type === "creditCard" && creditCardError ? "danger" : "default", errorMessage: field.type === "creditCard" && creditCardError ? creditCardError : "" }), field.type === "totp" && (_jsx(Button, { size: "sm", color: "secondary", onPress: generateTOTPKey, className: "mt-2", children: "Generate TOTP Key" })), (field.type === "backupCodes" || field.type === "address") && (_jsx(Textarea, { label: field.key, value: field.value, onChange: (e) => updateCustomField(field.id, field.key, e.target.value), minRows: 3 })), _jsx(Button, { isIconOnly: true, color: "danger", variant: "light", onPress: () => removeCustomField(field.id), className: "absolute top-0 right-0", "aria-label": "Remove field", children: _jsx(BsXCircle, { className: "text-lg" }) })] }, field.id));
    };
    return (_jsxs("div", { className: "max-w-md mx-auto mt-8 p-6 dark:bg-dark rounded-lg shadow-lg", children: [_jsxs("div", { className: "flex items-center justify-center mb-6", children: [_jsx(BsLock, { className: "text-3xl text-primary mr-2" }), _jsx("h2", { className: "text-2xl font-semibold dark:text-light", children: "Secure Information Vault" })] }), _jsxs("form", { className: "space-y-4", onSubmit: (e) => e.preventDefault(), children: [_jsx(Input, { type: "text", label: "Application Name", id: "appName", name: "appName", isRequired: true }), _jsx(Input, { type: "text", label: "Username", id: "username", name: "username", isRequired: true }), _jsx(Input, { type: "password", label: "Password", id: "password", name: "password", isRequired: true }), customFields.map(renderCustomField), _jsx(Select, { label: "Add Field", placeholder: "Select field type", onChange: (e) => addCustomField(e.target.value), children: fieldTypes.map((type) => (_jsx(SelectItem, { textValue: type.value, children: type.label }, type.value))) }), _jsx(Checkbox, { children: "Remember this device" }), _jsx(Button, { color: "primary", type: "submit", className: "w-full", children: "Save Securely" })] }), _jsx("span", { className: "mt-4 text-xs text-gray-500 text-center", children: "Your information is encrypted and securely stored. We never share your data." }), _jsx(Modal, { className: "dark:text-white", backdrop: "blur", placement: "center", isOpen: !!showConfirmation, onClose: () => setShowConfirmation(null), children: _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: _jsx("h3", { children: "Confirm Deletion" }) }), _jsx(ModalBody, { children: _jsx("span", { children: "This field contains a value. Are you sure you want to remove it? This action cannot be undone." }) }), _jsxs(ModalFooter, { children: [_jsx(Button, { color: "danger", onPress: confirmRemoveField, children: "Yes, Remove Field" }), _jsx(Button, { color: "default", onPress: () => setShowConfirmation(null), children: "Cancel" })] })] }) })] }));
}
