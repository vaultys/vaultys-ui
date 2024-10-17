"use client";
import { Button, Checkbox, Select, SelectItem, Slider } from "@nextui-org/react";
import { generateMnemonic, setDefaultWordlist } from "bip39";
import { useEffect, useState } from "react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import { FaGrin } from "@react-icons/all-files/fa/FaGrin";
import { FaSmile } from "@react-icons/all-files/fa/FaSmile";
import { FaFrown } from "@react-icons/all-files/fa/FaFrown";
import { FaMeh } from "@react-icons/all-files/fa/FaMeh";
import { FiRefreshCcw } from "@react-icons/all-files/fi/FiRefreshCcw";
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
    passhprase: {
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
    }, [numbers, capitalLetters, lowercaseLetters, specialCharacters]);
    useEffect(() => {
        if (wordsNumber < 6)
            setRobustness(ROBUSTNESS.BAD);
        else if (wordsNumber >= 6 && wordsNumber < 8)
            setRobustness(ROBUSTNESS.MINIMAL);
        else if (wordsNumber >= 8 && wordsNumber < 10)
            setRobustness(ROBUSTNESS.GOOD);
        else if (wordsNumber >= 10)
            setRobustness(ROBUSTNESS.ROBUST);
        if (language === "fr")
            setDefaultWordlist("french");
        else
            setDefaultWordlist("english");
        generatePassphrase();
    }, [wordsNumber, language]);
    useEffect(() => {
        let score = 0;
        score += length * 2;
        if (capitalLetters)
            score += 10;
        if (lowercaseLetters)
            score += 10;
        if (numbers)
            score += 10;
        if (specialCharacters)
            score += 10;
        if (capitalLetters && lowercaseLetters && numbers && specialCharacters)
            score += 10;
        if (score > 40 && score <= 50)
            setRobustness(ROBUSTNESS.MINIMAL);
        else if (score > 50 && score <= 75)
            setRobustness(ROBUSTNESS.GOOD);
        else if (score > 75)
            setRobustness(ROBUSTNESS.ROBUST);
        else
            setRobustness(ROBUSTNESS.BAD);
    }, [numbers, capitalLetters, lowercaseLetters, specialCharacters, length]);
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
        console.log(onConfigChanged);
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
    const passwordStrength = () => {
        switch (robustness) {
            case ROBUSTNESS.BAD:
                return <FaFrown className="text-danger w-16 h-16 mx-auto"/>;
            case ROBUSTNESS.MINIMAL:
                return <FaMeh className="text-warning w-16 h-16 mx-auto"/>;
            case ROBUSTNESS.GOOD:
                return <FaSmile className="text-success w-16 h-16 mx-auto"/>;
            case ROBUSTNESS.ROBUST:
                return <FaGrin className="text-success w-16 h-16 mx-auto"/>;
            default:
                break;
        }
    };
    return (<div className="flex flex-col gap-2 w-full bg-light dark:bg-dark p-4 text-black dark:text-white rounded-large">
      <div className={`cursor-pointer flex flex-row justify-between items-center gap-4 border-2 p-2 rounded-large transition-all duration-200  ${copied ? "border-success bg-success" : "border-modern-blue"}`} onClick={() => {
            navigator.clipboard.writeText(type === PasswordType.PASSWORD ? password : passphrase);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        }}>
        <div className="font-bold break-all text-lg font-mono">{type === PasswordType.PASSWORD ? password : passphrase}</div>
        <div className="flex-shrink-0 flex flex-row items-center gap-1">
          {copied ? (<>
              {TRAD.copied[locale]} <BiCheck />
            </>) : (<BiCopy />)}
        </div>
      </div>
      {passwordStrength()}
      <Select label={TRAD.passwordType[locale]} selectedKeys={[type !== null && type !== void 0 ? type : PasswordType.PASSWORD]} classNames={{
            trigger: "bg-light-secondary dark:bg-dark-secondary",
            popoverContent: "bg-light-secondary dark:bg-dark-secondary",
        }}>
        <SelectItem key={PasswordType.PASSWORD} onPress={() => setType(PasswordType.PASSWORD)}>
          {TRAD.password[locale]}
        </SelectItem>
        <SelectItem key={PasswordType.PASSPHRASE} onPress={() => setType(PasswordType.PASSPHRASE)}>
          {TRAD.passhprase[locale]}
        </SelectItem>
      </Select>

      {type === PasswordType.PASSWORD ? (<div className="bg-light-secondary dark:bg-dark-secondary flex flex-col gap-2 rounded-large p-3">
          <Slider label={`${TRAD.charNumber[locale]}`} minValue={8} maxValue={128} value={length} onChange={(value) => setLength(value)} onChangeEnd={generatePassword} size="lg" classNames={{
                filler: "bg-modern-blue",
                track: "border-s-modern-blue bg-slate-200 dark:bg-slate-700",
                thumb: "bg-black dark:bg-white",
            }}/>
          <Checkbox color="primary" isSelected={lowercaseLetters} onValueChange={(value) => setLowercaseLetters(value)}>
            a-z
          </Checkbox>
          <Checkbox color="primary" isSelected={capitalLetters} onValueChange={(value) => setCapitalLetters(value)}>
            A-Z
          </Checkbox>
          <Checkbox color="primary" isSelected={numbers} onValueChange={(value) => setNumbers(value)}>
            0-9
          </Checkbox>
          <Checkbox color="primary" isSelected={specialCharacters} onValueChange={(value) => setSpecialCharacters(value)}>
            {SPECIAL_CHARS}
          </Checkbox>
        </div>) : (<div className="bg-light-secondary dark:bg-dark-secondary flex flex-col gap-2 rounded-large p-3">
          <Slider label={`${TRAD.wordNumber[locale]}`} minValue={4} maxValue={24} value={wordsNumber} onChange={(value) => setWordsNumber(value)} onChangeEnd={generatePassword} size="lg" classNames={{
                filler: "bg-modern-blue",
                track: "border-s-modern-blue bg-light-secondary dark:bg-dark-secondary",
                thumb: "bg-black dark:bg-white",
            }}/>
          <Select label={TRAD.language[locale]} selectedKeys={[language]} classNames={{
                trigger: "bg-light dark:bg-dark",
                popoverContent: "bg-light dark:bg-dark",
            }}>
            <SelectItem key="fr" onPress={() => setLanguage("fr")}>
              {TRAD.french[locale]}
            </SelectItem>
            <SelectItem key="en" onPress={() => setLanguage("en")}>
              {TRAD.english[locale]}
            </SelectItem>
          </Select>
        </div>)}

      <Button startContent={<FiRefreshCcw />} onPress={() => (type === PasswordType.PASSWORD ? generatePassword() : generatePassphrase())} color="success">
        {TRAD.regenerate[locale]}
      </Button>
    </div>);
};
