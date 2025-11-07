"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import AppPasswordRead from "./AppPasswordRead";
import AppPasswordEdit from "./AppPasswordEdit";
import { AnimatePresence, motion } from "framer-motion";
export const AppPassword = ({ passwordData, locale, onUpdate, readonly = false, onGeneratorConfig, passwordConfig }) => {
    const [editMode, setEditMode] = useState(false);
    const [currentData, setCurrentData] = useState(passwordData);
    const [isDataChanged, setIsDataChanged] = useState(false);
    // Mise à jour du state lorsque les props changent
    useEffect(() => {
        setCurrentData(passwordData);
    }, [passwordData]);
    // Vérifier si des modifications ont été apportées
    useEffect(() => {
        const hasChanges = currentData.username !== passwordData.username ||
            currentData.password !== passwordData.password ||
            currentData.totpSecret !== passwordData.totpSecret ||
            currentData.secureNotes !== passwordData.secureNotes;
        setIsDataChanged(hasChanges);
    }, [currentData, passwordData]);
    const handleEdit = () => {
        setEditMode(true);
    };
    const handleSave = (data) => {
        setCurrentData(data);
        setEditMode(false);
        if (onUpdate) {
            onUpdate(data);
        }
    };
    const handleCancel = () => {
        setCurrentData(Object.assign({}, passwordData));
        setEditMode(false);
    };
    return (_jsxs("div", { className: "w-full", children: [_jsx(AnimatePresence, { mode: "wait", children: editMode ? (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.2 }, children: _jsx(AppPasswordEdit, { passwordData: currentData, locale: locale, onSave: handleSave, onCancel: handleCancel, onGeneratorConfig: onGeneratorConfig, passwordConfig: passwordConfig }) }, "edit")) : (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.2 }, children: _jsx(AppPasswordRead, { readonly: readonly, passwordData: currentData, locale: locale, onEdit: handleEdit }) }, "read")) }), isDataChanged && !editMode && (_jsx("div", { className: "absolute top-2 right-2", children: _jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-success animate-pulse" }) }))] }));
};
export default AppPassword;
