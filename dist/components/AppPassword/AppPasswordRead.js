"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, Tooltip, useDisclosure, Card, Progress } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaRegCopy } from "@react-icons/all-files/fa/FaRegCopy";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaExpand } from "@react-icons/all-files/fa/FaExpand";
import { FaRegEdit } from "@react-icons/all-files/fa/FaRegEdit";
import { generateTOTP } from "../../lib/totp";
import { TRAD } from "./translations";
export const AppPasswordRead = ({ passwordData, locale, onEdit, readonly = false }) => {
    var _a;
    const [usernameCopied, setUsernameCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);
    const [otpCopied, setOtpCopied] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [otp, setOtp] = useState();
    const [otpProgress, setOtpProgress] = useState(0);
    const [showSecureNotes, setShowSecureNotes] = useState(false);
    const { isOpen: secureNotesIsOpen, onOpen: secureNotesOnOpen, onClose: secureNotesOnClose } = useDisclosure();
    useEffect(() => {
        if (!(passwordData === null || passwordData === void 0 ? void 0 : passwordData.totpSecret))
            return;
        const msToNextSecond = Math.ceil(Date.now() / 1000) * 1000 - Date.now();
        const startTimer = () => {
            const generatedOtp = generateTOTP(passwordData.totpSecret);
            setOtp(generatedOtp);
            setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 30000) * 30000) / 300));
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
            }, 2000);
        }
    };
    const handleCopyPassword = () => {
        if (passwordData.password) {
            navigator.clipboard.writeText(passwordData.password);
            setPasswordCopied(true);
            setTimeout(() => {
                setPasswordCopied(false);
            }, 2000);
        }
    };
    const handleCopyOtp = () => {
        if (otp) {
            navigator.clipboard.writeText(otp);
            setOtpCopied(true);
            setTimeout(() => {
                setOtpCopied(false);
            }, 2000);
        }
    };
    const isEmptyPasswordData = !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.username) && !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.password) && !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.totpSecret) && !(passwordData === null || passwordData === void 0 ? void 0 : passwordData.secureNotes);
    const isInvalidTotpSecret = (passwordData === null || passwordData === void 0 ? void 0 : passwordData.totpSecret) && passwordData.totpSecret.length !== 16;
    return (_jsxs("div", { className: "flex flex-col gap-4 w-full", children: [isEmptyPasswordData && (_jsx(Card, { className: "p-6 bg-default-50 border-none", children: _jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [_jsx("div", { className: "text-4xl mb-3", children: "\uD83D\uDD12" }), _jsx("p", { className: "text-default-600", children: TRAD.no_credentials[locale] })] }) })), isInvalidTotpSecret && (_jsx("div", { className: "p-4 mb-2 bg-danger-100 text-danger rounded-lg border border-danger/20 shadow-sm", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-lg", children: "\u26A0\uFE0F" }), _jsx("span", { children: TRAD.invalid_totp_secret[locale] })] }) })), (passwordData === null || passwordData === void 0 ? void 0 : passwordData.username) && passwordData.username.length > 0 && (_jsx("div", { className: "group relative", children: _jsx(Input, { onClick: handleCopyUsername, color: usernameCopied ? "success" : "default", readOnly: true, label: TRAD.username[locale], value: passwordData.username, classNames: {
                        input: "cursor-copy",
                    }, endContent: _jsx("div", { className: "flex flex-row gap-2 items-center", children: _jsx(Tooltip, { content: usernameCopied ? TRAD.copy[locale] + "!" : TRAD.copy[locale], color: usernameCopied ? "success" : "default", children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: usernameCopied ? _jsx(FaCheck, { className: "text-success" }) : _jsx(FaRegCopy, { className: "cursor-pointer", onClick: handleCopyUsername }) }) }) }) }) })), passwordData.password && passwordData.password.length > 0 && (_jsx("div", { className: "group relative", children: _jsx(Input, { readOnly: true, onClick: handleCopyPassword, color: passwordCopied ? "success" : "default", label: TRAD.password[locale], type: showPassword ? "text" : "password", value: showPassword ? passwordData.password : "********", classNames: {
                        input: "cursor-copy",
                    }, endContent: _jsxs("div", { className: "flex flex-row gap-2 items-center", children: [_jsx(Tooltip, { content: showPassword ? TRAD.hide[locale] : TRAD.show[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: showPassword ? (_jsx(BiHide, { className: "cursor-pointer", onClick: () => setShowPassword(false) })) : (_jsx(BiShow, { className: "cursor-pointer", onClick: () => setShowPassword(true) })) }) }), _jsx(Tooltip, { content: passwordCopied ? TRAD.copy[locale] + "!" : TRAD.copy[locale], color: passwordCopied ? "success" : "default", children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: passwordCopied ? _jsx(FaCheck, { className: "text-success" }) : _jsx(FaRegCopy, { className: "cursor-pointer", onClick: handleCopyPassword }) }) })] }) }) })), passwordData.totpSecret && passwordData.totpSecret.length === 16 && (_jsx("div", { className: `${otpCopied ? "bg-success-50 text-success-600" : "bg-default-100"} p-4 rounded-large cursor-copy`, onClick: handleCopyOtp, children: _jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [TRAD.otp[locale], passwordData.totpSecret && otpProgress !== null && _jsxs("div", { className: "text-xs text-default-500", children: [30 - Math.floor(otpProgress / 3.333), "s"] })] }), _jsx("div", { className: "relative", children: _jsxs("div", { className: "flex justify-center items-center", children: [_jsx("div", { className: "text-2xl font-mono tracking-wider  px-4 py-2", children: otp ? ((_a = otp.match(/.{1,3}/g)) === null || _a === void 0 ? void 0 : _a.join(" ")) || otp : "" }), _jsx(Tooltip, { content: otpCopied ? TRAD.copy[locale] + "!" : TRAD.copy[locale], color: otpCopied ? "success" : "default", children: _jsx("button", { className: "p-1 rounded-md ml-2 hover:bg-default-200 transition-colors", children: otpCopied ? _jsx(FaCheck, { className: "text-success" }) : _jsx(FaRegCopy, { className: "cursor-pointer", onClick: handleCopyOtp }) }) })] }) }), passwordData.totpSecret && otpProgress !== null && (_jsx(Progress, { "aria-label": "OTP Timer", size: "md", value: 100 - otpProgress, color: "secondary", className: "mt-1", showValueLabel: false }))] }) })), passwordData.secureNotes && passwordData.secureNotes.length > 0 && (_jsx("div", { className: "group relative", children: _jsx(Textarea, { readOnly: true, maxRows: 3, minRows: 3, label: TRAD.secure_notes[locale], value: showSecureNotes ? passwordData.secureNotes : "********", className: "hover:border-primary focus:border-primary transition-all", endContent: _jsxs("div", { className: "flex flex-row gap-2 items-center", children: [_jsx(Tooltip, { content: showSecureNotes ? TRAD.hide[locale] : TRAD.show[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: showSecureNotes ? (_jsx(BiHide, { className: "cursor-pointer", onClick: () => setShowSecureNotes(false) })) : (_jsx(BiShow, { className: "cursor-pointer", onClick: () => setShowSecureNotes(true) })) }) }), passwordData.secureNotes.length > 100 && (_jsx(Tooltip, { content: TRAD.secure_notes[locale], children: _jsx("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: _jsx(FaExpand, { className: "cursor-pointer", onClick: () => secureNotesOnOpen() }) }) }))] }) }) })), !readonly && (_jsx(Button, { color: "primary", variant: "flat", startContent: _jsx(FaRegEdit, {}), onPress: onEdit, className: "mt-2", fullWidth: true, children: TRAD.edit[locale] })), _jsx(Modal, { backdrop: "blur", classNames: {
                    base: "bg-background",
                    header: "border-b border-divider",
                    footer: "border-t border-divider",
                    body: "py-6",
                }, scrollBehavior: "inside", isOpen: secureNotesIsOpen, onClose: secureNotesOnClose, children: _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: TRAD.secure_notes[locale] }), _jsx(ModalBody, { children: _jsx(Textarea, { readOnly: true, label: TRAD.secure_notes[locale], value: passwordData.secureNotes }) })] }) })] }));
};
export default AppPasswordRead;
