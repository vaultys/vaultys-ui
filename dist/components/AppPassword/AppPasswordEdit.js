"use client";
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
import { useState, useEffect } from "react";
import { Button, Input, Tab, Tabs, Textarea, Switch, Progress, Tooltip, Chip } from "@heroui/react";
import { FaRegSave } from "@react-icons/all-files/fa/FaRegSave";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { MdFingerprint } from "@react-icons/all-files/md/MdFingerprint";
import { BsTextLeft } from "@react-icons/all-files/bs/BsTextLeft";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { FaCog } from "@react-icons/all-files/fa/FaCog";
import { FaRegCopy } from "@react-icons/all-files/fa/FaRegCopy";
import { FiRefreshCcw } from "@react-icons/all-files/fi/FiRefreshCcw";
import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";
import { generateTOTP } from "../../lib/totp";
import { TRAD } from "./translations";
import { useConfirmModal } from "../ConfirmModal";
import { AnimatePresence, motion } from "framer-motion";
import PasswordEntropy from "@rabbit-company/password-entropy";
export const AppPasswordEdit = ({ passwordData, locale, onSave, onCancel, onGeneratorConfig, passwordConfig = {
    capitalLetters: true,
    length: 16,
    lowercaseLetters: true,
    numbers: true,
    specialCharacters: true,
}, compact = false, }) => {
    var _a, _b, _c;
    const confirmModal = useConfirmModal();
    const [activeTab, setActiveTab] = useState("credentials");
    const [editedData, setEditedData] = useState(Object.assign({}, passwordData));
    const [showPassword, setShowPassword] = useState(false);
    const [showSecureNotes, setShowSecureNotes] = useState(false);
    const [totpEnabled, setTotpEnabled] = useState(!!editedData.totpSecret);
    const [otp, setOtp] = useState("");
    const [otpProgress, setOtpProgress] = useState(0);
    const [isInvalidTotpSecret, setIsInvalidTotpSecret] = useState(false);
    const [usernameCopied, setUsernameCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);
    const [otpCopied, setOtpCopied] = useState(false);
    const [entropy, setEntropy] = useState(0);
    const [robustness, setRobustness] = useState(0);
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
            try {
                generateTOTP(formattedValue);
                setIsInvalidTotpSecret(false);
            }
            catch (error) {
                setIsInvalidTotpSecret(true);
            }
        }
        else {
            setIsInvalidTotpSecret(false);
        }
    };
    // Générer un mot de passe aléatoire
    const generatePassword = () => {
        const CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
        const NUMBERS = "0123456789";
        const SPECIAL_CHARS = ".,;:?!'\"@#%&*+-_=()[]{}<>/\\|~^";
        let passwordChars = "";
        let generatedPwd = [];
        const { length, lowercaseLetters, capitalLetters, numbers, specialCharacters } = passwordConfig;
        if (lowercaseLetters) {
            passwordChars += LOWERCASE_LETTERS;
            let index = Math.floor(Math.random() * length);
            while (generatedPwd[index]) {
                index = Math.floor(Math.random() * length);
            }
            generatedPwd[index] = LOWERCASE_LETTERS.charAt(Math.floor(Math.random() * LOWERCASE_LETTERS.length));
        }
        if (capitalLetters) {
            passwordChars += CAPITAL_LETTERS;
            let index = Math.floor(Math.random() * length);
            while (generatedPwd[index]) {
                index = Math.floor(Math.random() * length);
            }
            generatedPwd[index] = CAPITAL_LETTERS.charAt(Math.floor(Math.random() * CAPITAL_LETTERS.length));
        }
        if (numbers) {
            passwordChars += NUMBERS;
            let index = Math.floor(Math.random() * length);
            while (generatedPwd[index]) {
                index = Math.floor(Math.random() * length);
            }
            generatedPwd[index] = NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
        }
        if (specialCharacters) {
            passwordChars += SPECIAL_CHARS;
            let index = Math.floor(Math.random() * length);
            while (generatedPwd[index]) {
                index = Math.floor(Math.random() * length);
            }
            generatedPwd[index] = SPECIAL_CHARS.charAt(Math.floor(Math.random() * SPECIAL_CHARS.length));
        }
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * passwordChars.length);
            if (!generatedPwd[i])
                generatedPwd[i] = passwordChars.charAt(randomIndex);
        }
        const newPassword = generatedPwd.join("");
        setEditedData(Object.assign(Object.assign({}, editedData), { password: newPassword }));
        setShowPassword(true);
    };
    // Gérer le changement de mot de passe
    const handlePasswordChange = (value) => {
        setEditedData(Object.assign(Object.assign({}, editedData), { password: value }));
    };
    // Fonction de gestion d'annulation avec confirmation si des modifications existent
    const handleCancel = () => __awaiter(void 0, void 0, void 0, function* () {
        if (hasChanges()) {
            const confirmed = yield confirmModal.show({
                header: TRAD.unsaved_changes_title[locale],
                alert: TRAD.unsaved_changes_message[locale],
                alertDescription: TRAD.unsaved_changes_description[locale],
                cancelText: TRAD.cancel[locale],
                acceptText: TRAD.discard[locale],
                color: "warning",
            });
            if (!confirmed) {
                return;
            }
        }
        setActiveTab("credentials");
        onCancel();
    });
    // Fonction de sauvegarde qui réinitialise l'onglet
    const handleSave = () => {
        setActiveTab("credentials");
        onSave(editedData);
    };
    // Hook pour gérer les modifications non sauvegardées lors du démontage du composant
    useEffect(() => {
        return () => {
            // Nettoyage si nécessaire
        };
    }, []);
    // Générer le code TOTP lorsque le secret est valide
    useEffect(() => {
        if (!editedData.totpSecret) {
            setOtp("");
            setIsInvalidTotpSecret(false);
            return;
        }
        // Tester d'abord la validité de la clé
        try {
            generateTOTP(editedData.totpSecret);
            setIsInvalidTotpSecret(false);
        }
        catch (error) {
            setOtp("");
            setIsInvalidTotpSecret(true);
            return;
        }
        // Si la clé est valide, démarrer le timer
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
    }, [editedData.totpSecret]);
    // Mettre à jour l'état du TOTP activé/désactivé
    useEffect(() => {
        if (!totpEnabled && editedData.totpSecret) {
            setEditedData(Object.assign(Object.assign({}, editedData), { totpSecret: "" }));
        }
    }, [totpEnabled]);
    // Calculer l'entropie du mot de passe
    useEffect(() => {
        if (editedData.password) {
            const calculatedEntropy = PasswordEntropy.calculate(editedData.password);
            setEntropy(calculatedEntropy);
        }
        else {
            setEntropy(0);
        }
    }, [editedData.password]);
    // Déterminer la robustesse basée sur l'entropie
    useEffect(() => {
        if (entropy < 36)
            setRobustness(0);
        else if (entropy < 60)
            setRobustness(1);
        else if (entropy < 120)
            setRobustness(2);
        else
            setRobustness(3);
    }, [entropy]);
    const getStrengthInfo = () => {
        var _a;
        const strengthLabels = {
            fr: ["Très faible", "Faible", "Fort", "Très fort"],
            en: ["Very weak", "Weak", "Strong", "Very strong"],
            es: ["Muy débil", "Débil", "Fuerte", "Muy fuerte"],
            de: ["Sehr schwach", "Schwach", "Stark", "Sehr stark"],
            zh: ["非常弱", "弱", "强", "非常强"],
        };
        const colors = ["danger", "warning", "success", "primary"];
        return {
            label: ((_a = strengthLabels[locale]) === null || _a === void 0 ? void 0 : _a[robustness]) || strengthLabels.en[robustness],
            color: colors[robustness],
        };
    };
    return (_jsxs("div", { className: `flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`, children: [hasChanges() && (_jsxs("div", { className: "sticky top-0 z-10 bg-content1 -mx-1 px-1 pb-3 border-b-2 border-default-200", children: [_jsxs("div", { className: `bg-warning-50 border-l-4 border-warning rounded-r-lg flex items-start gap-2 ${compact ? "p-2 mb-2" : "p-4 mb-3 gap-3"}`, children: [_jsx(FaInfoCircle, { className: `text-warning flex-shrink-0 mt-0.5 ${compact ? "text-base" : "text-xl"}` }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: `font-semibold text-warning-700 ${compact ? "text-sm" : ""}`, children: TRAD.unsaved_changes_title[locale] }), _jsx("p", { className: `text-warning-600 ${compact ? "text-xs mt-0.5" : "text-sm mt-1"}`, children: TRAD.unsaved_changes_message[locale] })] })] }), _jsxs("div", { className: `flex flex-row justify-end ${compact ? "gap-2" : "gap-3"}`, children: [_jsx(Button, { color: "default", variant: "flat", startContent: _jsx(FaTimes, {}), onPress: handleCancel, size: compact ? "md" : "lg", className: compact ? "min-w-[100px]" : "min-w-[120px]", children: TRAD.cancel[locale] }), _jsx(Button, { color: "primary", variant: "shadow", startContent: _jsx(FaRegSave, {}), onPress: handleSave, isDisabled: (isInvalidTotpSecret && !!editedData.totpSecret) || !hasChanges(), size: compact ? "md" : "lg", className: `${compact ? "min-w-[100px]" : "min-w-[120px]"} animate-in zoom-in-95`, children: TRAD.save[locale] })] })] })), _jsxs(Tabs, { variant: "underlined", size: "sm", "aria-label": "Options", color: "primary", selectedKey: activeTab, onSelectionChange: (key) => setActiveTab(key.toString()), classNames: {
                    tabList: compact ? "gap-1" : "gap-4",
                    tab: compact ? "px-1 h-8 data-[selected=true]:text-primary" : "px-1 h-10 data-[selected=true]:text-primary",
                }, children: [_jsx(Tab, { title: compact ? (_jsx(Tooltip, { content: TRAD.credentials[locale], children: _jsx("div", { className: "flex items-center", children: _jsx(FaLock, { className: "text-base" }) }) })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FaLock, { className: "text-lg" }), _jsx("span", { children: TRAD.credentials[locale] })] })), children: _jsxs("div", { className: compact ? "py-2 space-y-3" : "py-4 space-y-5", children: [_jsxs("div", { className: "relative", children: [_jsx(Input, { label: TRAD.username[locale], placeholder: TRAD.enter_username[locale], value: editedData.username || "", onValueChange: (value) => setEditedData(Object.assign(Object.assign({}, editedData), { username: value })), size: compact ? "sm" : "md", startContent: _jsx(AiOutlineUser, { className: "text-default-400" }), endContent: _jsx(Tooltip, { content: TRAD.copy[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", onClick: () => {
                                                        if (editedData.username) {
                                                            navigator.clipboard.writeText(editedData.username);
                                                            setUsernameCopied(true);
                                                            setTimeout(() => setUsernameCopied(false), 3000);
                                                        }
                                                    }, children: _jsx(FaRegCopy, { className: "cursor-pointer" }) }) }) }), _jsx(AnimatePresence, { children: usernameCopied && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: TRAD.copied[locale] })) })] }), _jsxs("div", { className: compact ? "space-y-1" : "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: compact ? "text-xs" : "text-sm", children: TRAD.password[locale] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { size: "sm", color: "primary", onPress: generatePassword, startContent: _jsx(FiRefreshCcw, {}), children: TRAD.generate_password[locale] }), onGeneratorConfig && (_jsx(Tooltip, { content: TRAD.configure_generator[locale], children: _jsx(Button, { isIconOnly: true, size: "sm", variant: "light", onPress: onGeneratorConfig, children: _jsx(FaCog, { className: "text-default-400" }) }) }))] })] }), _jsxs("div", { className: "relative", children: [_jsx(Input, { value: editedData.password || "", type: showPassword ? "text" : "password", onValueChange: handlePasswordChange, size: compact ? "sm" : "md", classNames: {
                                                        input: "font-mono",
                                                    }, endContent: _jsxs("div", { className: "flex flex-row gap-2 items-center", children: [_jsx(Tooltip, { content: showPassword ? TRAD.hide[locale] : TRAD.show[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", onClick: () => setShowPassword(!showPassword), children: showPassword ? _jsx(BiHide, { className: "cursor-pointer" }) : _jsx(BiShow, { className: "cursor-pointer" }) }) }), _jsx(Tooltip, { content: TRAD.copy[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", onClick: () => {
                                                                        if (editedData.password) {
                                                                            navigator.clipboard.writeText(editedData.password);
                                                                            setPasswordCopied(true);
                                                                            setTimeout(() => setPasswordCopied(false), 3000);
                                                                        }
                                                                    }, children: _jsx(FaRegCopy, { className: "cursor-pointer" }) }) })] }) }), _jsx(AnimatePresence, { children: passwordCopied && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: TRAD.copied[locale] })) })] }), editedData.password && editedData.password.length > 0 && (_jsxs("div", { className: compact ? "space-y-1 mt-2" : "space-y-2 mt-3", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: `font-medium text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: locale === "fr"
                                                                        ? "Force du mot de passe"
                                                                        : locale === "es"
                                                                            ? "Fuerza de la contraseña"
                                                                            : locale === "de"
                                                                                ? "Passwortstärke"
                                                                                : locale === "zh"
                                                                                    ? "密码强度"
                                                                                    : "Password strength" }), _jsx(Tooltip, { content: locale === "fr"
                                                                        ? "Plus vous utilisez de types de caractères et plus votre mot de passe est long, plus il est sécurisé."
                                                                        : locale === "es"
                                                                            ? "Cuantos más tipos de caracteres utilices y más larga sea tu contraseña, más segura será."
                                                                            : locale === "de"
                                                                                ? "Je mehr Zeichentypen Sie verwenden und je länger Ihr Passwort ist, desto sicherer ist es."
                                                                                : locale === "zh"
                                                                                    ? "您使用的字符类型越多，密码越长，密码就越安全。"
                                                                                    : "The more character types you use and the longer your password is, the more secure it will be.", children: _jsx(Button, { isIconOnly: true, size: "sm", variant: "light", className: compact ? "min-w-5 w-5 h-5" : "min-w-6 w-6 h-6", children: _jsx(BsInfoCircleFill, { className: `text-default-400 ${compact ? "text-xs" : "text-sm"}` }) }) })] }), _jsx(Chip, { size: "sm", color: getStrengthInfo().color, variant: "flat", className: compact ? "text-xs h-5" : "", children: getStrengthInfo().label })] }), _jsx(Progress, { size: compact ? "sm" : "md", "aria-label": "Password strength", classNames: {
                                                        indicator: `${entropy <= 35 ? "bg-danger" : ""} ${entropy > 35 && entropy <= 59 ? "bg-warning" : ""} ${entropy > 59 && entropy < 120 ? "bg-success" : ""} ${entropy >= 120 ? "bg-primary" : ""}`,
                                                    }, value: entropy, maxValue: 120, minValue: 0, showValueLabel: false })] }))] })] }) }, "credentials"), _jsx(Tab, { title: compact ? (_jsx(Tooltip, { content: TRAD.two_factor_auth[locale], children: _jsx("div", { className: "flex items-center", children: _jsx(MdFingerprint, { className: "text-base" }) }) })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MdFingerprint, { className: "text-lg" }), _jsx("span", { children: TRAD.two_factor_auth[locale] })] })), children: _jsxs("div", { className: compact ? "py-2 space-y-3" : "py-4 space-y-5", children: [!compact && (_jsxs("div", { className: `flex items-start gap-2 text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: [_jsx(FaInfoCircle, { className: "mt-0.5 flex-shrink-0 text-default-400" }), _jsx("p", { children: TRAD.totp_explanation[locale] })] })), compact && (_jsx(Tooltip, { content: TRAD.totp_explanation[locale], className: "max-w-xs", children: _jsx("div", { className: "flex items-center gap-2 text-default-600 text-xs cursor-help", children: _jsx(FaInfoCircle, { className: "text-default-400" }) }) })), _jsx("div", { className: "flex items-center gap-2", children: _jsx(Switch, { isSelected: totpEnabled, onValueChange: setTotpEnabled, color: "primary", children: _jsx("span", { className: "text-medium", children: TRAD.two_factor_auth[locale] }) }) }), totpEnabled && (_jsxs("div", { className: compact ? "space-y-3" : "space-y-5", children: [_jsx(Input, { label: TRAD.otp[locale], placeholder: TRAD.enter_totp_secret[locale], value: editedData.totpSecret || "", onValueChange: updateTotpSecret, color: isInvalidTotpSecret ? "danger" : "default", variant: "flat", size: compact ? "sm" : "md", description: isInvalidTotpSecret ? TRAD.invalid_totp_secret[locale] : "" }), editedData.totpSecret && !isInvalidTotpSecret && otp && (_jsx("div", { className: compact ? "py-1" : "py-2", children: _jsxs("div", { className: `flex flex-col ${compact ? "gap-1" : "gap-2"}`, children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: `text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: TRAD.otp[locale] }), otpProgress !== null && _jsxs("div", { className: "text-xs text-default-500", children: [30 - Math.floor(otpProgress / 3.333), "s"] })] }), _jsxs("div", { className: "flex justify-center items-center relative", children: [_jsx("div", { className: `font-mono tracking-wider ${compact ? "text-lg" : "text-2xl"}`, children: otp ? ((_a = otp.match(/.{1,3}/g)) === null || _a === void 0 ? void 0 : _a.join(" ")) || otp : "" }), _jsx(Tooltip, { content: TRAD.copy[locale], children: _jsx("button", { className: `p-1 rounded-md hover:bg-default-200 transition-colors ${compact ? "ml-1" : "ml-2"}`, onClick: () => {
                                                                        if (otp) {
                                                                            navigator.clipboard.writeText(otp);
                                                                            setOtpCopied(true);
                                                                            setTimeout(() => setOtpCopied(false), 3000);
                                                                        }
                                                                    }, children: _jsx(FaRegCopy, { className: `cursor-pointer ${compact ? "text-sm" : ""}` }) }) }), _jsx(AnimatePresence, { children: otpCopied && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: TRAD.copied[locale] })) })] }), _jsx(Progress, { "aria-label": "OTP Timer", size: compact ? "sm" : "md", value: 100 - otpProgress, color: "secondary", showValueLabel: false })] }) }))] }))] }) }, "2fa"), _jsx(Tab, { title: compact ? (_jsx(Tooltip, { content: TRAD.secure_notes[locale], children: _jsx("div", { className: "flex items-center", children: _jsx(BsTextLeft, { className: "text-base" }) }) })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(BsTextLeft, { className: "text-lg" }), _jsx("span", { children: TRAD.secure_notes[locale] })] })), children: _jsxs("div", { className: compact ? "py-2 space-y-2" : "py-4 space-y-4", children: [!compact && (_jsxs("div", { className: `flex items-start gap-2 text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: [_jsx(FaInfoCircle, { className: "mt-0.5 flex-shrink-0 text-default-400" }), _jsx("p", { children: TRAD.secure_notes_explanation[locale] })] })), compact && (_jsx(Tooltip, { content: TRAD.secure_notes_explanation[locale], className: "max-w-xs", children: _jsx("div", { className: "flex items-center gap-2 text-default-600 text-xs cursor-help", children: _jsx(FaInfoCircle, { className: "text-default-400" }) }) })), _jsxs("div", { className: compact ? "space-y-1" : "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { className: `block ${compact ? "text-sm" : "text-medium"}`, htmlFor: "secureNotes", children: TRAD.secure_notes[locale] }), _jsx(Tooltip, { content: showSecureNotes ? TRAD.hide[locale] : TRAD.show[locale], children: _jsx(Button, { isIconOnly: true, size: "sm", variant: "light", onPress: () => setShowSecureNotes(!showSecureNotes), children: showSecureNotes ? _jsx(BiHide, {}) : _jsx(BiShow, {}) }) })] }), _jsx(Textarea, { id: "secureNotes", placeholder: TRAD.enter_secure_notes[locale], value: editedData.secureNotes || "", onValueChange: (value) => {
                                                if (value.length <= 1000) {
                                                    setEditedData(Object.assign(Object.assign({}, editedData), { secureNotes: value }));
                                                }
                                            }, minRows: compact ? 3 : 4, variant: "flat", size: compact ? "sm" : "md", classNames: {
                                                input: `${!showSecureNotes ? "blur-sm font-mono" : "font-mono"}`,
                                                base: "w-full",
                                            } }), (((_b = editedData.secureNotes) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0 && _jsxs("div", { className: "text-xs text-right text-default-500", children: [(_c = editedData.secureNotes) === null || _c === void 0 ? void 0 : _c.length, "/1000"] })] })] }) }, "notes")] })] }));
};
export default AppPasswordEdit;
