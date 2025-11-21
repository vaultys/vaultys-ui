"use client";
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
  const [entropy, setEntropy] = useState<number>(75);
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
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters, length]);

  useEffect(() => {
    if (language === "fr") setDefaultWordlist("french");
    else setDefaultWordlist("english");
    if (wordsNumber < 6) setRobustness(ROBUSTNESS.BAD);
    else if (wordsNumber >= 6 && wordsNumber < 8) setRobustness(ROBUSTNESS.MINIMAL);
    else if (wordsNumber >= 8 && wordsNumber < 10) setRobustness(ROBUSTNESS.GOOD);
    else if (wordsNumber >= 10) setRobustness(ROBUSTNESS.ROBUST);
    setEntropy(wordsNumber * 11);

    generatePassphrase();
  }, [wordsNumber, language]);

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
    if (entropy < 36) return setRobustness(ROBUSTNESS.BAD);
    else if (entropy < 60) return setRobustness(ROBUSTNESS.MINIMAL);
    else if (entropy < 120) return setRobustness(ROBUSTNESS.GOOD);
    else return setRobustness(ROBUSTNESS.ROBUST);
  }, [entropy]);

  return (
    <div className="flex flex-col gap-4 w-full p-4 rounded-lg bg-background shadow-xs">
      <Switch
        isSelected={type === PasswordType.PASSWORD}
        onValueChange={() => setType(type === PasswordType.PASSWORD ? PasswordType.PASSPHRASE : PasswordType.PASSWORD)}
        data-test="password-generator-select-type-switch"
      >
        <div className="flex flex-row gap-2 items-center">
          {type === PasswordType.PASSWORD ? <RiLockPasswordFill /> : <BiKey />}
          {type === PasswordType.PASSWORD ? TRAD.password[locale] : TRAD.passphrase[locale]}
        </div>
      </Switch>

      <div className="relative">
        <Tooltip content={TRAD.clickToCopy[locale]}>
          <div
            className={`cursor-pointer flex flex-row justify-between items-center gap-4 p-4 border rounded-lg transition-colors ${
              copied ? "border-success bg-success bg-opacity-10" : "border-default-200 hover:bg-default-100"
            }`}
            data-test="password-generator-password-area"
            onClick={() => {
              navigator.clipboard.writeText(type === PasswordType.PASSWORD ? password : passphrase);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            <div className="font-mono text-lg break-all">{type === PasswordType.PASSWORD ? password : passphrase}</div>
            <div className="shrink-0 flex items-center gap-1 text-sm">
              {copied ? (
                <span className="flex items-center gap-1 text-success">
                  {TRAD.copied[locale]} <BiCheck size={18} />
                </span>
              ) : (
                <BiCopy size={18} className="text-default-500" />
              )}
            </div>
          </div>
        </Tooltip>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">{TRAD.passwordStrength[locale]}</span>
            <Tooltip content={TRAD.infoTooltip[locale]}>
              <Button isIconOnly size="sm" variant="light">
                <BsInfoCircleFill className="text-default-400" />
              </Button>
            </Tooltip>
          </div>
          <Chip size="sm" color={getStrengthInfo().color as "danger" | "warning" | "success" | "primary"} variant="flat">
            {getStrengthInfo().label}
          </Chip>
        </div>
        <Progress
          size="md"
          aria-label="Password strength"
          classNames={{
            indicator: `${entropy <= 35 ? "bg-danger" : ""} ${entropy > 35 && entropy <= 59 ? "bg-warning" : ""} ${entropy > 59 && entropy < 120 ? "bg-success" : ""} ${
              entropy >= 120 ? "bg-primary" : ""
            }`,
          }}
          value={entropy}
          maxValue={120}
          minValue={0}
          showValueLabel={false}
        />
      </div>

      <div className="border border-default-200 rounded-lg p-4 bg-default-50" data-test="password-generator-password-options">
        <h4 className="text-sm font-medium mb-3">{TRAD.options[locale]}</h4>

        {type === PasswordType.PASSWORD ? (
          <div className="flex flex-col gap-4">
            <Slider
              data-test="password-generator-password-length"
              label={`${TRAD.charNumber[locale]} (${length})`}
              minValue={8}
              maxValue={128}
              value={length}
              onChange={(value) => setLength(value as number)}
              onChangeEnd={generatePassword}
              size="sm"
              classNames={{
                filler: "bg-primary",
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <Checkbox
                color="primary"
                isSelected={lowercaseLetters}
                onValueChange={(value: boolean) => setLowercaseLetters(value)}
                data-test="password-generator-password-lowercase"
              >
                a-z
              </Checkbox>
              <Checkbox
                color="primary"
                isSelected={capitalLetters}
                onValueChange={(value: boolean) => setCapitalLetters(value)}
                data-test="password-generator-password-uppercase"
              >
                A-Z
              </Checkbox>
              <Checkbox color="primary" isSelected={numbers} onValueChange={(value: boolean) => setNumbers(value)} data-test="password-generator-password-numbers">
                0-9
              </Checkbox>
              <Checkbox
                color="primary"
                isSelected={specialCharacters}
                onValueChange={(value: boolean) => setSpecialCharacters(value)}
                data-test="password-generator-password-symbols"
              >
                {SPECIAL_CHARS}
              </Checkbox>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <Slider
              data-test="password-generator-passphrase-length"
              label={`${TRAD.wordNumber[locale]} (${wordsNumber})`}
              minValue={4}
              maxValue={24}
              value={wordsNumber}
              onChange={(value) => setWordsNumber(value as number)}
              onChangeEnd={generatePassphrase}
              size="sm"
              classNames={{
                filler: "bg-primary",
              }}
            />
            <Select label={TRAD.language[locale]} selectedKeys={[language]} size="sm" className="max-w-xs" data-test="password-generator-passphrase-language">
              <SelectItem key="fr" onPress={() => setLanguage("fr")}>
                {TRAD.french[locale]}
              </SelectItem>
              <SelectItem key="en" onPress={() => setLanguage("en")}>
                {TRAD.english[locale]}
              </SelectItem>
            </Select>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-2">
        <Button
          startContent={<FiRefreshCcw />}
          onPress={() => (type === PasswordType.PASSWORD ? generatePassword() : generatePassphrase())}
          color="primary"
          size="sm"
          data-test="password-generator-regenerate-button"
        >
          {TRAD.regenerate[locale]}
        </Button>
      </div>
    </div>
  );
};
