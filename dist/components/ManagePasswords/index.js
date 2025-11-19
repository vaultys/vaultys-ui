"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Button, Popover, PopoverTrigger, PopoverContent, Listbox, ListboxItem, Chip } from "@heroui/react";
import { BsFolderFill } from "@react-icons/all-files/bs/BsFolderFill";
import { BsPersonFill } from "@react-icons/all-files/bs/BsPersonFill";
import { BiKey } from "@react-icons/all-files/bi/BiKey";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { AppPassword } from "../AppPassword";
import { MANAGE_PASSWORDS_TRAD } from "./translations";
export const ManagePasswords = ({ personalPassword, folderPasswords = [], locale = "en", onUpdate, onGeneratorConfig, readonly = false, admin = false, passwordConfig, compact = false, }) => {
    const [selectedKey, setSelectedKey] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    // Déterminer le premier élément avec un mot de passe
    useEffect(() => {
        if (selectedKey)
            return;
        // Vérifier le mot de passe personnel d'abord
        if (personalPassword && (personalPassword.username || personalPassword.password)) {
            setSelectedKey("personal");
            return;
        }
        // Chercher le premier dossier avec un mot de passe
        const firstFolderWithPassword = folderPasswords.find((fp) => fp.password && (fp.password.username || fp.password.password));
        if (firstFolderWithPassword) {
            setSelectedKey(firstFolderWithPassword.folder);
            return;
        }
        // Par défaut, sélectionner "personal" ou le premier dossier
        if (folderPasswords.length > 0) {
            setSelectedKey(folderPasswords[0].folder);
        }
        else {
            setSelectedKey("personal");
        }
    }, [personalPassword, folderPasswords, selectedKey]);
    // Déterminer si la sélection actuelle est en lecture seule
    // En mode non-admin, les dossiers sont en lecture seule
    const isCurrentReadonly = readonly || (!admin && selectedKey !== "personal");
    // S'il n'y a pas de dossiers, afficher directement AppPassword
    if (folderPasswords.length === 0) {
        return (_jsx(AppPassword, { passwordConfig: passwordConfig, passwordData: personalPassword || {}, locale: locale, onUpdate: (data) => onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate("personal", data), onGeneratorConfig: onGeneratorConfig, readonly: readonly, compact: compact }));
    }
    // Obtenir le mot de passe actuellement sélectionné
    const getCurrentPassword = () => {
        if (selectedKey === "personal") {
            return personalPassword || {};
        }
        const folder = folderPasswords.find((fp) => fp.folder === selectedKey);
        return (folder === null || folder === void 0 ? void 0 : folder.password) || {};
    };
    // Créer les options pour le Select
    const options = [
        {
            key: "personal",
            label: MANAGE_PASSWORDS_TRAD.personal[locale],
            icon: _jsx(BsPersonFill, { className: "text-primary" }),
            hasPassword: !!(personalPassword && (personalPassword.username || personalPassword.password)),
        },
        ...folderPasswords.map((fp) => ({
            key: fp.folder,
            label: fp.folder,
            icon: _jsx(BsFolderFill, { className: "text-yellow-500" }),
            hasPassword: !!(fp.password && (fp.password.username || fp.password.password)),
        })),
    ];
    const handleUpdate = (data) => {
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(selectedKey, data);
    };
    // Obtenir le label de l'option sélectionnée
    const getSelectedLabel = () => {
        const selected = options.find((opt) => opt.key === selectedKey);
        return (selected === null || selected === void 0 ? void 0 : selected.label) || MANAGE_PASSWORDS_TRAD.select_folder[locale];
    };
    return (_jsxs("div", { className: `flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`, children: [_jsxs(Popover, { placement: "bottom-start", isOpen: isOpen, onOpenChange: setIsOpen, children: [_jsx(PopoverTrigger, { children: _jsx(Button, { variant: "flat", className: `justify-between ${compact ? "h-10" : "h-14"}`, size: compact ? "sm" : "md", endContent: _jsx(BiChevronDown, { className: compact ? "w-3 h-3" : "w-4 h-4" }), children: _jsxs("div", { className: `flex items-center ${compact ? "gap-1" : "gap-2"}`, children: [selectedKey === "personal" ? (_jsx(BsPersonFill, { className: `text-primary ${compact ? "w-4 h-4" : "w-5 h-5"}` })) : (_jsx(BsFolderFill, { className: `text-yellow-500 ${compact ? "w-4 h-4" : "w-5 h-5"}` })), _jsx("span", { className: compact ? "text-sm" : "", children: getSelectedLabel() })] }) }) }), _jsx(PopoverContent, { className: "p-1", children: _jsx(Listbox, { "aria-label": MANAGE_PASSWORDS_TRAD.select_folder[locale], selectedKeys: selectedKey ? [selectedKey] : [], selectionMode: "single", onSelectionChange: (keys) => {
                                const selected = Array.from(keys)[0];
                                if (selected) {
                                    setSelectedKey(selected);
                                    setIsOpen(false);
                                }
                            }, children: options.map((option) => (_jsx(ListboxItem, { startContent: option.icon, endContent: option.hasPassword ? (_jsx(Chip, { size: "sm", color: "success", variant: "flat", startContent: _jsx(BiKey, { className: "w-3 h-3" }), children: _jsx("span", { className: "text-xs", children: "Password" }) })) : undefined, children: option.label }, option.key))) }) })] }), !admin && selectedKey !== "personal" && (_jsx(Chip, { color: "warning", variant: "flat", startContent: _jsx(AiFillLock, { className: compact ? "w-3 h-3" : "w-4 h-4" }), classNames: { base: compact ? "p-2 h-auto" : "p-3 h-auto" }, children: _jsx("span", { className: compact ? "text-xs text-wrap" : "text-sm text-wrap", children: MANAGE_PASSWORDS_TRAD.folder_readonly_info[locale] }) })), _jsx(AppPassword, { passwordData: getCurrentPassword(), locale: locale, onUpdate: handleUpdate, onGeneratorConfig: onGeneratorConfig, passwordConfig: passwordConfig, readonly: isCurrentReadonly, compact: compact }, selectedKey)] }));
};
export default ManagePasswords;
