"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Checkbox, Progress, Select, SelectItem, Slider, Chip, Tooltip, Switch } from "@heroui/react";
import { generateMnemonic, setDefaultWordlist } from "bip39";
import { useEffect, useState } from "react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import { FiRefreshCcw } from "@react-icons/all-files/fi/FiRefreshCcw";
import { RiLockPasswordFill } from "@react-icons/all-files/ri/RiLockPasswordFill";
import { BiKey } from "@react-icons/all-files/bi/BiKey";
import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";
import PasswordEntropy from "@rabbit-company/password-entropy";
export var PasswordType;
(function (PasswordType) {
    PasswordType[PasswordType["PASSWORD"] = 0] = "PASSWORD";
    PasswordType[PasswordType["PASSPHRASE"] = 1] = "PASSPHRASE";
})(PasswordType || (PasswordType = {}));
const CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL_CHARS = ".,;:?!'\"@#%&*+-_=()[]{}<>/\\|~^";
var ROBUSTNESS;
(function (ROBUSTNESS) {
    ROBUSTNESS[ROBUSTNESS["BAD"] = 0] = "BAD";
    ROBUSTNESS[ROBUSTNESS["MINIMAL"] = 1] = "MINIMAL";
    ROBUSTNESS[ROBUSTNESS["GOOD"] = 2] = "GOOD";
    ROBUSTNESS[ROBUSTNESS["ROBUST"] = 3] = "ROBUST";
})(ROBUSTNESS || (ROBUSTNESS = {}));
const TRAD = {
    charNumber: {
        fr: "Nombre de caractères",
        en: "Character number",
    },
    copied: {
        fr: "Copié",
        en: "Copied",
    },
    wordNumber: {
        fr: "Nombre de mots",
        en: "Word number",
    },
    regenerate: {
        fr: "Regénérer",
        en: "Regenerate",
    },
    passwordType: {
        fr: "Type de mot de passe",
        en: "Password type",
    },
    password: {
        fr: "Mot de passe",
        en: "Password",
    },
    passphrase: {
        fr: "Phrase de passe",
        en: "Passphrase",
    },
    language: {
        fr: "Langage",
        en: "Language",
    },
    french: {
        fr: "Français",
        en: "French",
    },
    english: {
        fr: "Anglais",
        en: "English",
    },
    passwordStrength: {
        fr: "Force du mot de passe",
        en: "Password strength",
    },
    veryWeak: {
        fr: "Très faible",
        en: "Very weak",
    },
    weak: {
        fr: "Faible",
        en: "Weak",
    },
    strong: {
        fr: "Fort",
        en: "Strong",
    },
    veryStrong: {
        fr: "Très fort",
        en: "Very strong",
    },
    options: {
        fr: "Options",
        en: "Options",
    },
    clickToCopy: {
        fr: "Cliquer pour copier",
        en: "Click to copy",
    },
    infoTooltip: {
        fr: "Plus vous utilisez de types de caractères et plus votre mot de passe est long, plus il est sécurisé.",
        en: "The more character types you use and the longer your password is, the more secure it will be.",
    },
};
export const PasswordGenerator = ({ passwordType, passwordConfig, passphraseConfig, locale = "fr", onConfigChanged }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    // forcing to english if non translated locale
    if (locale !== "fr" && locale !== "en") {
        locale = "en";
    }
    const [length, setLength] = useState((_a = passwordConfig === null || passwordConfig === void 0 ? void 0 : passwordConfig.length) !== null && _a !== void 0 ? _a : 16);
    const [numbers, setNumbers] = useState((_b = passwordConfig === null || passwordConfig === void 0 ? void 0 : passwordConfig.numbers) !== null && _b !== void 0 ? _b : true);
    const [capitalLetters, setCapitalLetters] = useState((_c = passwordConfig === null || passwordConfig === void 0 ? void 0 : passwordConfig.capitalLetters) !== null && _c !== void 0 ? _c : true);
    const [lowercaseLetters, setLowercaseLetters] = useState((_d = passwordConfig === null || passwordConfig === void 0 ? void 0 : passwordConfig.lowercaseLetters) !== null && _d !== void 0 ? _d : true);
    const [specialCharacters, setSpecialCharacters] = useState((_e = passwordConfig === null || passwordConfig === void 0 ? void 0 : passwordConfig.specialCharacters) !== null && _e !== void 0 ? _e : true);
    const [type, setType] = useState(passwordType !== null && passwordType !== void 0 ? passwordType : PasswordType.PASSWORD);
    const [robustness, setRobustness] = useState(ROBUSTNESS.GOOD);
    const [entropy, setEntropy] = useState(75);
    const [copied, setCopied] = useState(false);
    const [password, setPassword] = useState("");
    const [wordsNumber, setWordsNumber] = useState((_f = passphraseConfig === null || passphraseConfig === void 0 ? void 0 : passphraseConfig.wordNumber) !== null && _f !== void 0 ? _f : 12);
    const [language, setLanguage] = useState((_g = passphraseConfig === null || passphraseConfig === void 0 ? void 0 : passphraseConfig.language) !== null && _g !== void 0 ? _g : "en");
    const [passphrase, setPassphrase] = useState("");
    useEffect(() => {
        if (!numbers && !capitalLetters && !lowercaseLetters && !specialCharacters)
            setLowercaseLetters(true);
        else {
            generatePassword();
        }
    }, [numbers, capitalLetters, lowercaseLetters, specialCharacters, length]);
    useEffect(() => {
        if (language === "fr")
            setDefaultWordlist("french");
        else
            setDefaultWordlist("english");
        if (wordsNumber < 6)
            setRobustness(ROBUSTNESS.BAD);
        else if (wordsNumber >= 6 && wordsNumber < 8)
            setRobustness(ROBUSTNESS.MINIMAL);
        else if (wordsNumber >= 8 && wordsNumber < 10)
            setRobustness(ROBUSTNESS.GOOD);
        else if (wordsNumber >= 10)
            setRobustness(ROBUSTNESS.ROBUST);
        setEntropy(wordsNumber * 11);
        generatePassphrase();
    }, [wordsNumber, language]);
    const generatePassword = () => {
        let passwordChars = "";
        let password = [];
        if (lowercaseLetters) {
            passwordChars += LOWERCASE_LETTERS;
            let index = Math.floor(Math.random() * length);
            while (password[index]) {
                index = Math.floor(Math.random() * length);
            }
            password[index] = LOWERCASE_LETTERS.charAt(Math.floor(Math.random() * LOWERCASE_LETTERS.length));
        }
        if (capitalLetters) {
            passwordChars += CAPITAL_LETTERS;
            let index = Math.floor(Math.random() * length);
            while (password[index]) {
                index = Math.floor(Math.random() * length);
            }
            password[index] = CAPITAL_LETTERS.charAt(Math.floor(Math.random() * CAPITAL_LETTERS.length));
        }
        if (numbers) {
            passwordChars += NUMBERS;
            let index = Math.floor(Math.random() * length);
            while (password[index]) {
                index = Math.floor(Math.random() * length);
            }
            password[index] = NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
        }
        if (specialCharacters) {
            passwordChars += SPECIAL_CHARS;
            let index = Math.floor(Math.random() * length);
            while (password[index]) {
                index = Math.floor(Math.random() * length);
            }
            password[index] = SPECIAL_CHARS.charAt(Math.floor(Math.random() * SPECIAL_CHARS.length));
        }
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * passwordChars.length);
            if (!password[i])
                password[i] = passwordChars.charAt(randomIndex);
        }
        setPassword(password.join(""));
    };
    const generatePassphrase = () => {
        const mnemonic = generateMnemonic(256);
        setPassphrase(mnemonic.split(" ").slice(0, wordsNumber).join(" "));
    };
    useEffect(() => {
        setCopied(false);
    }, [password, passphrase, type]);
    useEffect(() => {
        onConfigChanged({
            passwordType: type,
            passphraseConfig: {
                language,
                wordNumber: wordsNumber,
            },
            passwordConfig: {
                capitalLetters,
                length,
                lowercaseLetters,
                numbers,
                specialCharacters,
            },
        });
    }, [type, length, lowercaseLetters, capitalLetters, numbers, specialCharacters, wordsNumber, language]);
    const getStrengthInfo = () => {
        switch (robustness) {
            case ROBUSTNESS.BAD:
                return {
                    label: TRAD.veryWeak[locale],
                    color: "danger",
                };
            case ROBUSTNESS.MINIMAL:
                return {
                    label: TRAD.weak[locale],
                    color: "warning",
                };
            case ROBUSTNESS.GOOD:
                return {
                    label: TRAD.strong[locale],
                    color: "success",
                };
            case ROBUSTNESS.ROBUST:
                return {
                    label: TRAD.veryStrong[locale],
                    color: "primary",
                };
            default:
                return {
                    label: "",
                    color: "",
                };
        }
    };
    useEffect(() => {
        setEntropy(PasswordEntropy.calculate(password));
    }, [password]);
    useEffect(() => {
        if (entropy < 36)
            return setRobustness(ROBUSTNESS.BAD);
        else if (entropy < 60)
            return setRobustness(ROBUSTNESS.MINIMAL);
        else if (entropy < 120)
            return setRobustness(ROBUSTNESS.GOOD);
        else
            return setRobustness(ROBUSTNESS.ROBUST);
    }, [entropy]);
    return (_jsxs("div", { className: "flex flex-col gap-4 w-full p-4 rounded-lg bg-background shadow-sm", children: [_jsx(Switch, { isSelected: type === PasswordType.PASSWORD, onValueChange: () => setType(type === PasswordType.PASSWORD ? PasswordType.PASSPHRASE : PasswordType.PASSWORD), children: _jsxs("div", { className: "flex flex-row gap-2 items-center", children: [type === PasswordType.PASSWORD ? _jsx(RiLockPasswordFill, {}) : _jsx(BiKey, {}), type === PasswordType.PASSWORD ? TRAD.password[locale] : TRAD.passphrase[locale]] }) }), _jsx("div", { className: "relative", children: _jsx(Tooltip, { content: TRAD.clickToCopy[locale], children: _jsxs("div", { className: `cursor-pointer flex flex-row justify-between items-center gap-4 p-4 border rounded-lg transition-colors ${copied ? "border-success bg-success bg-opacity-10" : "border-default-200 hover:bg-default-100"}`, onClick: () => {
                            navigator.clipboard.writeText(type === PasswordType.PASSWORD ? password : passphrase);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1500);
                        }, children: [_jsx("div", { className: "font-mono text-lg break-all", children: type === PasswordType.PASSWORD ? password : passphrase }), _jsx("div", { className: "flex-shrink-0 flex items-center gap-1 text-sm", children: copied ? (_jsxs("span", { className: "flex items-center gap-1 text-success", children: [TRAD.copied[locale], " ", _jsx(BiCheck, { size: 18 })] })) : (_jsx(BiCopy, { size: 18, className: "text-default-500" })) })] }) }) }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: TRAD.passwordStrength[locale] }), _jsx(Tooltip, { content: TRAD.infoTooltip[locale], children: _jsx(Button, { isIconOnly: true, size: "sm", variant: "light", children: _jsx(BsInfoCircleFill, { className: "text-default-400" }) }) })] }), _jsx(Chip, { size: "sm", color: getStrengthInfo().color, variant: "flat", children: getStrengthInfo().label })] }), _jsx(Progress, { size: "md", "aria-label": "Password strength", classNames: {
                            indicator: `${entropy <= 35 ? "bg-danger" : ""} ${entropy > 35 && entropy <= 59 ? "bg-warning" : ""} ${entropy > 59 && entropy < 120 ? "bg-success" : ""} ${entropy >= 120 ? "bg-primary" : ""}`,
                        }, value: entropy, maxValue: 120, minValue: 0, showValueLabel: false })] }), _jsxs("div", { className: "border border-default-200 rounded-lg p-4 bg-default-50", children: [_jsx("h4", { className: "text-sm font-medium mb-3", children: TRAD.options[locale] }), type === PasswordType.PASSWORD ? (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Slider, { label: `${TRAD.charNumber[locale]} (${length})`, minValue: 8, maxValue: 128, value: length, onChange: (value) => setLength(value), onChangeEnd: generatePassword, size: "sm", classNames: {
                                    filler: "bg-primary",
                                } }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2", children: [_jsx(Checkbox, { color: "primary", isSelected: lowercaseLetters, onValueChange: (value) => setLowercaseLetters(value), children: "a-z" }), _jsx(Checkbox, { color: "primary", isSelected: capitalLetters, onValueChange: (value) => setCapitalLetters(value), children: "A-Z" }), _jsx(Checkbox, { color: "primary", isSelected: numbers, onValueChange: (value) => setNumbers(value), children: "0-9" }), _jsx(Checkbox, { color: "primary", isSelected: specialCharacters, onValueChange: (value) => setSpecialCharacters(value), children: SPECIAL_CHARS })] })] })) : (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Slider, { label: `${TRAD.wordNumber[locale]} (${wordsNumber})`, minValue: 4, maxValue: 24, value: wordsNumber, onChange: (value) => setWordsNumber(value), onChangeEnd: generatePassphrase, size: "sm", classNames: {
                                    filler: "bg-primary",
                                } }), _jsxs(Select, { label: TRAD.language[locale], selectedKeys: [language], size: "sm", className: "max-w-xs", children: [_jsx(SelectItem, { onPress: () => setLanguage("fr"), children: TRAD.french[locale] }, "fr"), _jsx(SelectItem, { onPress: () => setLanguage("en"), children: TRAD.english[locale] }, "en")] })] }))] }), _jsx("div", { className: "flex justify-end mt-2", children: _jsx(Button, { startContent: _jsx(FiRefreshCcw, {}), onPress: () => (type === PasswordType.PASSWORD ? generatePassword() : generatePassphrase()), color: "primary", size: "sm", children: TRAD.regenerate[locale] }) })] }));
};
