"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, Tooltip, useDisclosure, Card, Progress } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaRegCopy } from "@react-icons/all-files/fa/FaRegCopy";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaExpand } from "@react-icons/all-files/fa/FaExpand";
import { FaRegEdit } from "@react-icons/all-files/fa/FaRegEdit";
import { generateTOTP } from "../../lib/totp";
import { TRAD } from "./translations";
import { AnimatePresence, motion } from "framer-motion";
export const AppPasswordRead = ({ passwordData, locale, onEdit, readonly = false, compact = false }) => {
    var _a;
    const [usernameCopied, setUsernameCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);
    const [otpCopied, setOtpCopied] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [otp, setOtp] = useState();
    const [otpProgress, setOtpProgress] = useState(0);
    const [showSecureNotes, setShowSecureNotes] = useState(false);
    const { isOpen: secureNotesIsOpen, onOpen: secureNotesOnOpen, onClose: secureNotesOnClose } = useDisclosure();
    const [isInvalidTotpSecret, setIsInvalidTotpSecret] = useState(false);
    useEffect(() => {
        if (!(passwordData === null || passwordData === void 0 ? void 0 : passwordData.totpSecret)) {
            setIsInvalidTotpSecret(false);
            return;
        }
        // Tester d'abord la validité de la clé
        try {
            generateTOTP(passwordData.totpSecret);
            setIsInvalidTotpSecret(false);
        }
        catch (error) {
            setOtp(undefined);
            setIsInvalidTotpSecret(true);
            return;
        }
        // Si la clé est valide, démarrer le timer
        const msToNextSecond = Math.ceil(Date.now() / 1000) * 1000 - Date.now();
        const startTimer = () => {
            try {
                const generatedOtp = generateTOTP(passwordData.totpSecret);
                setOtp(generatedOtp);
                setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 30000) * 30000) / 300));
            }
            catch (error) {
                setOtp(undefined);
                setIsInvalidTotpSecret(true);
            }
        };
        startTimer();
        const initialTimeout = setTimeout(() => {
            startTimer();
            const intervalId = setInterval(startTimer, 1000);
            return () => clearInterval(intervalId);
        }, msToNextSecond);
        return () => clearTimeout(initialTimeout);
    }, [passwordData.totpSecret]);
    const handleCopyUsername = () => {
        if (passwordData.username) {
            navigator.clipboard.writeText(passwordData.username);
            setUsernameCopied(true);
            setTimeout(() => {
                setUsernameCopied(false);
            }, 3000);
        }
    };
    const handleCopyPassword = () => {
        if (passwordData.password) {
            navigator.clipboard.writeText(passwordData.password);
            setPasswordCopied(true);
            setTimeout(() => {
                setPasswordCopied(false);
            }, 3000);
        }
    };
    const handleCopyOtp = () => {
        if (otp) {
            navigator.clipboard.writeText(otp);
            setOtpCopied(true);
            setTimeout(() => {
                setOtpCopied(false);
            }, 3000);
        }
    };
    const isEmptyPasswordData = !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.username) && !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.password) && !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.totpSecret) && !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.secureNotes);
    return (_jsxs("div", { className: `flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`, children: [isEmptyPasswordData && (_jsx(Card, { className: `bg-default-50 border-none ${compact ? "p-3" : "p-6"}`, children: _jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [_jsx("div", { className: `mb-2 ${compact ? "text-2xl" : "text-4xl mb-3"}`, children: "\uD83D\uDD12" }), _jsx("p", { className: `text-default-600 ${compact ? "text-sm" : ""}`, children: TRAD.no_credentials[locale] })] }) })), isInvalidTotpSecret && (_jsx("div", { className: `bg-danger-100 text-danger rounded-lg border border-danger/20 shadow-xs ${compact ? "p-2 mb-1" : "p-4 mb-2"}`, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: compact ? "text-base" : "text-lg", children: "\u26A0\uFE0F" }), _jsx("span", { className: compact ? "text-sm" : "", children: TRAD.invalid_totp_secret[locale] })] }) })), (passwordData === null || passwordData === void 0 ? void 0 : passwordData.username) && passwordData.username.length > 0 && (_jsxs("div", { className: "relative", children: [_jsx(Input, { onClick: handleCopyUsername, readOnly: true, label: TRAD.username[locale], value: passwordData.username, size: compact ? "sm" : "md", classNames: {
                            input: "cursor-copy",
                        }, endContent: _jsx("div", { className: "flex flex-row gap-2 items-center", children: _jsx(Tooltip, { content: TRAD.copy[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: _jsx(FaRegCopy, { className: "cursor-pointer", onClick: handleCopyUsername }) }) }) }) }), _jsx(AnimatePresence, { children: usernameCopied && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: TRAD.copied[locale] })) })] })), passwordData.password && passwordData.password.length > 0 && (_jsxs("div", { className: "relative", children: [_jsx(Input, { readOnly: true, onClick: handleCopyPassword, label: TRAD.password[locale], type: showPassword ? "text" : "password", value: showPassword ? passwordData.password : "********", size: compact ? "sm" : "md", classNames: {
                            input: "cursor-copy",
                        }, endContent: _jsxs("div", { className: "flex flex-row gap-2 items-center", children: [_jsx(Tooltip, { content: showPassword ? TRAD.hide[locale] : TRAD.show[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: showPassword ? (_jsx(BiHide, { className: "cursor-pointer", onClick: () => setShowPassword(false) })) : (_jsx(BiShow, { className: "cursor-pointer", onClick: () => setShowPassword(true) })) }) }), _jsx(Tooltip, { content: TRAD.copy[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: _jsx(FaRegCopy, { className: "cursor-pointer", onClick: handleCopyPassword }) }) })] }) }), _jsx(AnimatePresence, { children: passwordCopied && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: TRAD.copied[locale] })) })] })), passwordData.totpSecret && !isInvalidTotpSecret && otp && (_jsxs("div", { className: "relative", children: [_jsx("div", { className: `${otpCopied ? "bg-success-50 text-success-600" : "bg-default-100"} rounded-large cursor-copy ${compact ? "p-2" : "p-4"}`, onClick: handleCopyOtp, children: _jsxs("div", { className: `flex flex-col ${compact ? "gap-1" : "gap-2"}`, children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: compact ? "text-sm" : "", children: TRAD.otp[locale] }), passwordData.totpSecret && otpProgress !== null && _jsxs("div", { className: "text-xs text-default-500", children: [30 - Math.floor(otpProgress / 3.333), "s"] })] }), _jsx("div", { className: "relative", children: _jsxs("div", { className: "flex justify-center items-center", children: [_jsx("div", { className: `font-mono tracking-wider ${compact ? "text-lg px-2 py-1" : "text-2xl px-4 py-2"}`, children: otp ? ((_a = otp.match(/.{1,3}/g)) === null || _a === void 0 ? void 0 : _a.join(" ")) || otp : "" }), _jsx(Tooltip, { content: TRAD.copy[locale], children: _jsx("button", { className: `p-1 rounded-md hover:bg-default-200 transition-colors ${compact ? "ml-1" : "ml-2"}`, children: _jsx(FaRegCopy, { className: `cursor-pointer ${compact ? "text-sm" : ""}`, onClick: handleCopyOtp }) }) })] }) }), passwordData.totpSecret && otpProgress !== null && (_jsx(Progress, { "aria-label": "OTP Timer", size: compact ? "sm" : "md", value: 100 - otpProgress, color: "secondary", className: compact ? "" : "mt-1", showValueLabel: false }))] }) }), _jsx(AnimatePresence, { children: otpCopied && (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg", children: TRAD.copied[locale] })) })] })), passwordData.secureNotes && passwordData.secureNotes.length > 0 && (_jsx(Textarea, { readOnly: true, maxRows: compact ? 2 : 3, minRows: compact ? 2 : 3, label: TRAD.secure_notes[locale], value: showSecureNotes ? passwordData.secureNotes : "********", size: compact ? "sm" : "md", className: "hover:border-primary focus:border-primary transition-all", endContent: _jsxs("div", { className: "flex flex-row gap-2 items-center", children: [_jsx(Tooltip, { content: showSecureNotes ? TRAD.hide[locale] : TRAD.show[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: showSecureNotes ? (_jsx(BiHide, { className: "cursor-pointer", onClick: () => setShowSecureNotes(false) })) : (_jsx(BiShow, { className: "cursor-pointer", onClick: () => setShowSecureNotes(true) })) }) }), passwordData.secureNotes.length > 100 && (_jsx(Tooltip, { content: TRAD.secure_notes[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: _jsx(FaExpand, { className: "cursor-pointer", onClick: () => secureNotesOnOpen() }) }) }))] }) })), !readonly && (_jsx(Button, { color: "primary", variant: "flat", startContent: _jsx(FaRegEdit, {}), onPress: onEdit, className: compact ? "mt-1" : "mt-2", size: compact ? "md" : "lg", fullWidth: true, children: TRAD.edit[locale] })), _jsx(Modal, { backdrop: "blur", classNames: {
                    base: "bg-background",
                    header: "border-b border-divider",
                    footer: "border-t border-divider",
                    body: "py-6",
                }, scrollBehavior: "inside", isOpen: secureNotesIsOpen, onClose: secureNotesOnClose, children: _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: TRAD.secure_notes[locale] }), _jsx(ModalBody, { children: _jsx(Textarea, { readOnly: true, label: TRAD.secure_notes[locale], value: passwordData.secureNotes }) })] }) })] }));
};
export default AppPasswordRead;
