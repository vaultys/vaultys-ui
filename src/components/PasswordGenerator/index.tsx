"use client";
import { Button, Checkbox, Select, SelectItem, Slider } from "@heroui/react";
import { generateMnemonic, setDefaultWordlist } from "bip39";
import { useEffect, useState } from "react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import { FaGrin } from "@react-icons/all-files/fa/FaGrin";
import { FaSmile } from "@react-icons/all-files/fa/FaSmile";
import { FaFrown } from "@react-icons/all-files/fa/FaFrown";
import { FaMeh } from "@react-icons/all-files/fa/FaMeh";
import { FiRefreshCcw } from "@react-icons/all-files/fi/FiRefreshCcw";

export enum PasswordType {
  PASSWORD,
  PASSPHRASE,
}

export type PasswordConfig = {
  length: number;
  numbers: boolean;
  capitalLetters: boolean;
  lowercaseLetters: boolean;
  specialCharacters: boolean;
};

export type PassphraseConfig = {
  wordNumber: number;
  language: Locale;
};

export type Locale = "fr" | "en";

export interface PasswordGeneratorProps {
  passwordType?: PasswordType;
  passwordConfig?: PasswordConfig;
  passphraseConfig?: PassphraseConfig;
  locale?: Locale;
  onConfigChanged: (config: { passwordType: PasswordType; passwordConfig: PasswordConfig; passphraseConfig: PassphraseConfig }) => void;
}

const CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL_CHARS = ".,;:?!'\"@#%&*+-_=()[]{}<>/\\|~^";

const enum ROBUSTNESS {
  BAD,
  MINIMAL,
  GOOD,
  ROBUST,
}

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

export const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ passwordType, passwordConfig, passphraseConfig, locale = "fr", onConfigChanged }) => {
  // forcing to english if non translated locale
  if (locale !== "fr" && locale !== "en") {
    locale = "en";
  }
  const [length, setLength] = useState<number>(passwordConfig?.length ?? 16);
  const [numbers, setNumbers] = useState<boolean>(passwordConfig?.numbers ?? true);
  const [capitalLetters, setCapitalLetters] = useState<boolean>(passwordConfig?.capitalLetters ?? true);
  const [lowercaseLetters, setLowercaseLetters] = useState<boolean>(passwordConfig?.lowercaseLetters ?? true);
  const [specialCharacters, setSpecialCharacters] = useState<boolean>(passwordConfig?.specialCharacters ?? true);
  const [type, setType] = useState<PasswordType>(passwordType ?? PasswordType.PASSWORD);
  const [robustness, setRobustness] = useState<ROBUSTNESS>(ROBUSTNESS.GOOD);
  const [copied, setCopied] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const [wordsNumber, setWordsNumber] = useState<number>(passphraseConfig?.wordNumber ?? 12);
  const [language, setLanguage] = useState<Locale>(passphraseConfig?.language ?? "en");
  const [passphrase, setPassphrase] = useState<string>("");

  useEffect(() => {
    if (!numbers && !capitalLetters && !lowercaseLetters && !specialCharacters) setLowercaseLetters(true);
    else {
      generatePassword();
    }
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters]);

  useEffect(() => {
    if (wordsNumber < 6) setRobustness(ROBUSTNESS.BAD);
    else if (wordsNumber >= 6 && wordsNumber < 8) setRobustness(ROBUSTNESS.MINIMAL);
    else if (wordsNumber >= 8 && wordsNumber < 10) setRobustness(ROBUSTNESS.GOOD);
    else if (wordsNumber >= 10) setRobustness(ROBUSTNESS.ROBUST);
    if (language === "fr") setDefaultWordlist("french");
    else setDefaultWordlist("english");
    generatePassphrase();
  }, [wordsNumber, language]);

  useEffect(() => {
    let score = 0;
    score += length * 2;
    if (capitalLetters) score += 10;
    if (lowercaseLetters) score += 10;
    if (numbers) score += 10;
    if (specialCharacters) score += 10;
    if (capitalLetters && lowercaseLetters && numbers && specialCharacters) score += 10;
    if (score > 40 && score <= 50) setRobustness(ROBUSTNESS.MINIMAL);
    else if (score > 50 && score <= 75) setRobustness(ROBUSTNESS.GOOD);
    else if (score > 75) setRobustness(ROBUSTNESS.ROBUST);
    else setRobustness(ROBUSTNESS.BAD);
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters, length]);

  const generatePassword = () => {
    let passwordChars = "";
    let password: string[] = [];

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
      if (!password[i]) password[i] = passwordChars.charAt(randomIndex);
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
        return <FaFrown className="text-danger w-16 h-16 mx-auto" />;
      case ROBUSTNESS.MINIMAL:
        return <FaMeh className="text-warning w-16 h-16 mx-auto" />;
      case ROBUSTNESS.GOOD:
        return <FaSmile className="text-success w-16 h-16 mx-auto" />;
      case ROBUSTNESS.ROBUST:
        return <FaGrin className="text-success w-16 h-16 mx-auto" />;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full bg-light dark:bg-dark p-4 text-black dark:text-white rounded-large">
      <div
        className={`cursor-pointer flex flex-row justify-between items-center gap-4 border-2 p-2 rounded-large transition-all duration-200  ${
          copied ? "border-success bg-success" : "border-modern-blue"
        }`}
        onClick={() => {
          navigator.clipboard.writeText(type === PasswordType.PASSWORD ? password : passphrase);
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        }}
      >
        <div className="font-bold break-all text-lg font-mono">{type === PasswordType.PASSWORD ? password : passphrase}</div>
        <div className="flex-shrink-0 flex flex-row items-center gap-1">
          {copied ? (
            <>
              {TRAD.copied[locale]} <BiCheck />
            </>
          ) : (
            <BiCopy />
          )}
        </div>
      </div>
      {passwordStrength()}
      <Select
        label={TRAD.passwordType[locale]}
        selectedKeys={[type ?? PasswordType.PASSWORD]}
        classNames={{
          trigger: "bg-light-secondary dark:bg-dark-secondary",
          popoverContent: "bg-light-secondary dark:bg-dark-secondary",
        }}
      >
        <SelectItem key={PasswordType.PASSWORD} onPress={() => setType(PasswordType.PASSWORD)}>
          {TRAD.password[locale]}
        </SelectItem>
        <SelectItem key={PasswordType.PASSPHRASE} onPress={() => setType(PasswordType.PASSPHRASE)}>
          {TRAD.passhprase[locale]}
        </SelectItem>
      </Select>

      {type === PasswordType.PASSWORD ? (
        <div className="bg-light-secondary dark:bg-dark-secondary flex flex-col gap-2 rounded-large p-3">
          <Slider
            label={`${TRAD.charNumber[locale]}`}
            minValue={8}
            maxValue={128}
            value={length}
            onChange={(value) => setLength(value as number)}
            onChangeEnd={generatePassword}
            size="lg"
            classNames={{
              filler: "bg-modern-blue",
              track: "border-s-modern-blue bg-slate-200 dark:bg-slate-700",
              thumb: "bg-black dark:bg-white",
            }}
          />
          <Checkbox color="primary" isSelected={lowercaseLetters} onValueChange={(value: boolean) => setLowercaseLetters(value)}>
            a-z
          </Checkbox>
          <Checkbox color="primary" isSelected={capitalLetters} onValueChange={(value: boolean) => setCapitalLetters(value)}>
            A-Z
          </Checkbox>
          <Checkbox color="primary" isSelected={numbers} onValueChange={(value: boolean) => setNumbers(value)}>
            0-9
          </Checkbox>
          <Checkbox color="primary" isSelected={specialCharacters} onValueChange={(value: boolean) => setSpecialCharacters(value)}>
            {SPECIAL_CHARS}
          </Checkbox>
        </div>
      ) : (
        <div className="bg-light-secondary dark:bg-dark-secondary flex flex-col gap-2 rounded-large p-3">
          <Slider
            label={`${TRAD.wordNumber[locale]}`}
            minValue={4}
            maxValue={24}
            value={wordsNumber}
            onChange={(value) => setWordsNumber(value as number)}
            onChangeEnd={generatePassword}
            size="lg"
            classNames={{
              filler: "bg-modern-blue",
              track: "border-s-modern-blue bg-light-secondary dark:bg-dark-secondary",
              thumb: "bg-black dark:bg-white",
            }}
          />
          <Select
            label={TRAD.language[locale]}
            selectedKeys={[language]}
            classNames={{
              trigger: "bg-light dark:bg-dark",
              popoverContent: "bg-light dark:bg-dark",
            }}
          >
            <SelectItem key="fr" onPress={() => setLanguage("fr")}>
              {TRAD.french[locale]}
            </SelectItem>
            <SelectItem key="en" onPress={() => setLanguage("en")}>
              {TRAD.english[locale]}
            </SelectItem>
          </Select>
        </div>
      )}

      <Button startContent={<FiRefreshCcw />} onPress={() => (type === PasswordType.PASSWORD ? generatePassword() : generatePassphrase())} color="success">
        {TRAD.regenerate[locale]}
      </Button>
    </div>
  );
};
