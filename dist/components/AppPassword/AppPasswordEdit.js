"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Button, Input, Tab, Tabs, Textarea, Switch, Progress, Tooltip } from "@heroui/react";
import { FaRegSave } from "@react-icons/all-files/fa/FaRegSave";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { MdFingerprint } from "@react-icons/all-files/md/MdFingerprint";
import { BsTextLeft } from "@react-icons/all-files/bs/BsTextLeft";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { generateTOTP } from "../../lib/totp";
import { TRAD } from "./translations";
import { SelectPassword } from "../SelectPassword";
export const AppPasswordEdit = ({ passwordData, locale, onSave, onCancel }) => {
    var _a, _b, _c;
    const [activeTab, setActiveTab] = useState("credentials");
    const [editedData, setEditedData] = useState(Object.assign({}, passwordData));
    const [showPassword, setShowPassword] = useState(false);
    const [showSecureNotes, setShowSecureNotes] = useState(false);
    const [totpEnabled, setTotpEnabled] = useState(!!editedData.totpSecret);
    const [otp, setOtp] = useState("");
    const [otpProgress, setOtpProgress] = useState(0);
    const [isInvalidTotpSecret, setIsInvalidTotpSecret] = useState(false);
    // Réinitialiser les données quand les props changent
    useEffect(() => {
        setEditedData(Object.assign({}, passwordData));
        setTotpEnabled(!!passwordData.totpSecret);
    }, [passwordData]);
    // Vérifier si des modifications ont été apportées
    const hasChanges = () => {
        return (editedData.username !== passwordData.username ||
            editedData.password !== passwordData.password ||
            editedData.totpSecret !== passwordData.totpSecret ||
            editedData.secureNotes !== passwordData.secureNotes);
    };
    // Mettre à jour le secret TOTP et gérer sa validation
    const updateTotpSecret = (value) => {
        const formattedValue = value.replace(/\s/g, "").toUpperCase();
        setEditedData(Object.assign(Object.assign({}, editedData), { totpSecret: formattedValue }));
        if (formattedValue) {
            setIsInvalidTotpSecret(formattedValue.length !== 16);
        }
        else {
            setIsInvalidTotpSecret(false);
        }
    };
    // Gérer le changement de mot de passe
    const handlePasswordChange = (value) => {
        setEditedData(Object.assign(Object.assign({}, editedData), { password: value }));
    };
    // Remplacer le mot de passe existant par un nouveau généré
    const handlePasswordOverwrite = (value) => {
        setEditedData(Object.assign(Object.assign({}, editedData), { password: value }));
    };
    // Fonction de gestion d'annulation pour réinitialiser l'onglet actif
    const handleCancel = () => {
        setActiveTab("credentials"); // Réinitialiser l'onglet à credentials
        onCancel(); // Appeler la fonction onCancel du parent
    };
    // Fonction de sauvegarde qui réinitialise l'onglet
    const handleSave = () => {
        setActiveTab("credentials");
        onSave(editedData);
    };
    // Générer le code TOTP lorsque le secret est valide
    useEffect(() => {
        if (!editedData.totpSecret || editedData.totpSecret.length !== 16) {
            setOtp("");
            return;
        }
        try {
            // Démarrer exactement au début d'une nouvelle seconde
            const msToNextSecond = Math.ceil(Date.now() / 1000) * 1000 - Date.now();
            const startTimer = () => {
                try {
                    const generatedOtp = generateTOTP(editedData.totpSecret);
                    setOtp(generatedOtp);
                    // Calculer la progression (0-100) basée sur le temps écoulé dans la période de 30s
                    setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 30000) * 30000) / 300));
                }
                catch (error) {
                    setOtp("");
                    setIsInvalidTotpSecret(true);
                }
            };
            // Initialisation
            startTimer();
            // Configurer l'intervalle pour actualiser chaque seconde
            const initialTimeout = setTimeout(() => {
                startTimer();
                const intervalId = setInterval(startTimer, 1000);
                return () => clearInterval(intervalId);
            }, msToNextSecond);
            return () => clearTimeout(initialTimeout);
        }
        catch (error) {
            setOtp("");
            setIsInvalidTotpSecret(true);
        }
    }, [editedData.totpSecret]);
    // Mettre à jour l'état du TOTP activé/désactivé
    useEffect(() => {
        if (!totpEnabled && editedData.totpSecret) {
            setEditedData(Object.assign(Object.assign({}, editedData), { totpSecret: "" }));
        }
    }, [totpEnabled]);
    return (_jsxs("div", { className: "flex flex-col gap-4 w-full", children: [_jsxs(Tabs, { variant: "underlined", size: "sm", "aria-label": "Options", color: "primary", selectedKey: activeTab, onSelectionChange: (key) => setActiveTab(key.toString()), classNames: {
                    tabList: "gap-4",
                    tab: "px-1 h-10 data-[selected=true]:text-primary",
                }, children: [_jsx(Tab, { title: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FaLock, { className: "text-lg" }), _jsx("span", { children: TRAD.credentials[locale] })] }), children: _jsxs("div", { className: "py-4 space-y-5", children: [_jsx(Input, { label: TRAD.username[locale], placeholder: TRAD.enter_username[locale], value: editedData.username || "", onValueChange: (value) => setEditedData(Object.assign(Object.assign({}, editedData), { username: value })), size: "md", startContent: _jsx(AiOutlineUser, { className: "text-default-400" }) }), _jsx("div", { children: _jsx(SelectPassword, { label: TRAD.password[locale], password: editedData.password || "", onChange: handlePasswordChange, onOverwrite: handlePasswordOverwrite, locale: locale, passwordConfig: {
                                            length: 16,
                                            numbers: true,
                                            capitalLetters: true,
                                            lowercaseLetters: true,
                                            specialCharacters: true,
                                        } }) })] }) }, "credentials"), _jsx(Tab, { title: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MdFingerprint, { className: "text-lg" }), _jsx("span", { children: TRAD.two_factor_auth[locale] })] }), children: _jsxs("div", { className: "py-4 space-y-5", children: [_jsxs("div", { className: "flex items-start gap-2 text-sm text-default-600", children: [_jsx(FaInfoCircle, { className: "mt-0.5 flex-shrink-0 text-default-400" }), _jsx("p", { children: TRAD.totp_explanation[locale] })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsx(Switch, { isSelected: totpEnabled, onValueChange: setTotpEnabled, color: "primary", children: _jsx("span", { className: "text-medium", children: TRAD.two_factor_auth[locale] }) }) }), totpEnabled && (_jsxs("div", { className: "space-y-5", children: [_jsx(Input, { label: TRAD.otp[locale], placeholder: TRAD.enter_totp_secret[locale], value: editedData.totpSecret || "", onValueChange: updateTotpSecret, color: isInvalidTotpSecret ? "danger" : "default", variant: "flat", size: "md", description: isInvalidTotpSecret ? TRAD.invalid_totp_secret[locale] : "" }), editedData.totpSecret && editedData.totpSecret.length === 16 && otp && (_jsx("div", { className: "py-2", children: _jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-default-600", children: TRAD.otp[locale] }), otpProgress !== null && _jsxs("div", { className: "text-xs text-default-500", children: [30 - Math.floor(otpProgress / 3.333), "s"] })] }), _jsx("div", { className: "flex justify-center", children: _jsx("div", { className: "text-2xl font-mono tracking-wider", children: otp ? ((_a = otp.match(/.{1,3}/g)) === null || _a === void 0 ? void 0 : _a.join(" ")) || otp : "" }) }), _jsx(Progress, { "aria-label": "OTP Timer", size: "md", value: 100 - otpProgress, color: "secondary", showValueLabel: false })] }) }))] }))] }) }, "2fa"), _jsx(Tab, { title: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(BsTextLeft, { className: "text-lg" }), _jsx("span", { children: TRAD.secure_notes[locale] })] }), children: _jsxs("div", { className: "py-4 space-y-4", children: [_jsxs("div", { className: "flex items-start gap-2 text-sm text-default-600", children: [_jsx(FaInfoCircle, { className: "mt-0.5 flex-shrink-0 text-default-400" }), _jsx("p", { children: TRAD.secure_notes_explanation[locale] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { className: "text-medium block", htmlFor: "secureNotes", children: TRAD.secure_notes[locale] }), _jsx(Tooltip, { content: showSecureNotes ? TRAD.hide[locale] : TRAD.show[locale], children: _jsx(Button, { isIconOnly: true, size: "sm", variant: "light", onPress: () => setShowSecureNotes(!showSecureNotes), children: showSecureNotes ? _jsx(BiHide, {}) : _jsx(BiShow, {}) }) })] }), _jsx(Textarea, { id: "secureNotes", placeholder: TRAD.enter_secure_notes[locale], value: editedData.secureNotes || "", onValueChange: (value) => {
                                                if (value.length <= 1000) {
                                                    setEditedData(Object.assign(Object.assign({}, editedData), { secureNotes: value }));
                                                }
                                            }, minRows: 4, variant: "flat", classNames: {
                                                input: `${!showSecureNotes ? "blur-sm font-mono" : "font-mono"}`,
                                                base: "w-full",
                                            } }), (((_b = editedData.secureNotes) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0 && _jsxs("div", { className: "text-xs text-right text-default-500", children: [(_c = editedData.secureNotes) === null || _c === void 0 ? void 0 : _c.length, "/1000"] })] })] }) }, "notes")] }), _jsxs("div", { className: "mt-2", children: [hasChanges() && (_jsxs("div", { className: "mb-3 flex items-center gap-2", children: [_jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-warning animate-pulse" }), _jsx("span", { className: "text-sm text-default-600", children: TRAD.has_changes[locale] })] })), _jsxs("div", { className: "flex flex-row gap-3 justify-end pt-3 border-t border-default-100", children: [_jsx(Button, { color: "danger", variant: "light", startContent: _jsx(FaTimes, {}), onPress: handleCancel, className: "min-w-[100px]", children: TRAD.cancel[locale] }), _jsx(Button, { color: "success", variant: "flat", startContent: _jsx(FaRegSave, {}), onPress: handleSave, isDisabled: (isInvalidTotpSecret && !!editedData.totpSecret) || !hasChanges(), className: "min-w-[100px]", children: TRAD.save[locale] })] })] })] }));
};
export default AppPasswordEdit;
