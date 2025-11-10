"use client";
import { Button, Input, Progress, Chip, Tooltip } from "@heroui/react";
import { useEffect, useState } from "react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { FiRefreshCcw } from "@react-icons/all-files/fi/FiRefreshCcw";
import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";
import PasswordEntropy from "@rabbit-company/password-entropy";

// Import des types et constantes de PasswordGenerator
import { PasswordType, PasswordConfig, PassphraseConfig } from "../PasswordGenerator";

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
  passwordStrength: {
    fr: "Force du mot de passe",
    en: "Password strength",
    es: "Fuerza de la contraseña",
    de: "Passwortstärke",
    zh: "密码强度",
  },
  veryWeak: {
    fr: "Très faible",
    en: "Very weak",
    es: "Muy débil",
    de: "Sehr schwach",
    zh: "非常弱",
  },
  weak: {
    fr: "Faible",
    en: "Weak",
    es: "Débil",
    de: "Schwach",
    zh: "弱",
  },
  strong: {
    fr: "Fort",
    en: "Strong",
    es: "Fuerte",
    de: "Stark",
    zh: "强",
  },
  veryStrong: {
    fr: "Très fort",
    en: "Very strong",
    es: "Muy fuerte",
    de: "Sehr stark",
    zh: "非常强",
  },
  copy: {
    fr: "Copier",
    en: "Copy",
    es: "Copiar",
    de: "Kopieren",
    zh: "复制",
  },
  generate: {
    fr: "Générer",
    en: "Generate",
    es: "Generar",
    de: "Generieren",
    zh: "生成",
  },
  overwrite: {
    fr: "Remplacer",
    en: "Overwrite",
    es: "Sobrescribir",
    de: "Überschreiben",
    zh: "覆盖",
  },
  infoTooltip: {
    fr: "Plus vous utilisez de types de caractères et plus votre mot de passe est long, plus il est sécurisé.",
    en: "The more character types you use and the longer your password is, the more secure it will be.",
    es: "Cuantos más tipos de caracteres utilice y más largo sea su contraseña, más seguro será.",
    de: "Je mehr Zeichentypen Sie verwenden und je länger Ihr Passwort ist, desto sicherer ist es.",
    zh: "您使用的字符类型越多，密码越长，密码就越安全。",
  },
  generatedPassword: {
    fr: "Mot de passe généré",
    en: "Generated password",
    es: "Contraseña generada",
    de: "Generiertes Passwort",
    zh: "生成的密码",
  },
};

export interface SelectPasswordProps {
  label?: string;
  description?: string;
  password?: string;
  onChange?: (value: string) => void;
  passwordConfig?: PasswordConfig;
  passphraseConfig?: PassphraseConfig;
  passwordType?: PasswordType;
  locale?: "fr" | "en" | "es" | "de" | "zh";
  testId?: string;
  compact?: boolean;
}

export const SelectPassword: React.FC<SelectPasswordProps> = ({
  label = "Mot de passe",
  description,
  password = "",
  onChange,
  passwordConfig = {
    length: 16,
    numbers: true,
    capitalLetters: true,
    lowercaseLetters: true,
    specialCharacters: true,
  },
  locale = "fr",
  testId,
  compact = false,
}) => {
  const [value, setValue] = useState<string>(password);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [entropy, setEntropy] = useState<number>(0);
  const [robustness, setRobustness] = useState<ROBUSTNESS>(ROBUSTNESS.BAD);

  // Mettre à jour la valeur du mot de passe si la prop change
  useEffect(() => {
    setValue(password);
  }, [password]);

  // Calculer l'entropie et la robustesse à chaque changement de mot de passe
  useEffect(() => {
    if (value) {
      const calculatedEntropy = PasswordEntropy.calculate(value);
      setEntropy(calculatedEntropy);

      if (calculatedEntropy < 36) setRobustness(ROBUSTNESS.BAD);
      else if (calculatedEntropy < 60) setRobustness(ROBUSTNESS.MINIMAL);
      else if (calculatedEntropy < 120) setRobustness(ROBUSTNESS.GOOD);
      else setRobustness(ROBUSTNESS.ROBUST);
    } else {
      setEntropy(0);
      setRobustness(ROBUSTNESS.BAD);
    }
  }, [value]);

  // Générer un mot de passe aléatoire et remplacer directement
  const generatePassword = () => {
    let passwordChars = "";
    let generatedPwd: string[] = [];
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
      if (!generatedPwd[i]) generatedPwd[i] = passwordChars.charAt(randomIndex);
    }

    const newPassword = generatedPwd.join("");

    // Remplacer directement le mot de passe
    setValue(newPassword);
    if (onChange) onChange(newPassword);
  };

  // Fonction pour copier le mot de passe
  const copyPassword = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Obtenir les informations sur la force du mot de passe
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

  return (
    <div className={`flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`}>
      {/* Champ de saisie du mot de passe */}
      <Input
        data-test={testId}
        label={label}
        value={value}
        type={showPassword ? "text" : "password"}
        onValueChange={(val: string) => {
          setValue(val);
          if (onChange) onChange(val);
        }}
        description={description}
        size={compact ? "sm" : "md"}
        classNames={{
          input: "font-mono",
        }}
        endContent={
          <div className={`flex flex-row items-center ${compact ? "gap-1" : "gap-2"}`}>
            <Tooltip content={TRAD.copy[locale]}>
              <button className="focus:outline-none" type="button" onClick={() => copyPassword(value)} disabled={!value}>
                {copied ? (
                  <BiCheck className={`text-success ${compact ? "text-base" : "text-xl"}`} />
                ) : (
                  <BiCopy className={`cursor-pointer ${compact ? "text-base" : "text-xl"}`} />
                )}
              </button>
            </Tooltip>
            <button className="focus:outline-none" type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <BiShow className={`cursor-pointer ${compact ? "text-base" : "text-xl"}`} />
              ) : (
                <BiHide className={`cursor-pointer ${compact ? "text-base" : "text-xl"}`} />
              )}
            </button>
            <Tooltip content={TRAD.generate[locale]}>
              <button className="focus:outline-none" type="button" onClick={generatePassword}>
                <FiRefreshCcw className={`cursor-pointer ${compact ? "text-base" : "text-xl"}`} />
              </button>
            </Tooltip>
          </div>
        }
      />

      {/* Indicateur de force du mot de passe */}
      {value && (
        <div className={compact ? "space-y-1" : "space-y-2"}>
          <div className={`flex justify-between items-center ${compact ? "text-xs" : "text-sm"}`}>
            <div className={`flex items-center ${compact ? "gap-1" : "gap-2"}`}>
              <span className="font-medium">{TRAD.passwordStrength[locale]}</span>
              <Tooltip content={TRAD.infoTooltip[locale]}>
                <Button isIconOnly size="sm" variant="light">
                  <BsInfoCircleFill className={`text-default-400 ${compact ? "text-xs" : ""}`} />
                </Button>
              </Tooltip>
            </div>
            <Chip size="sm" color={getStrengthInfo().color as "danger" | "warning" | "success" | "primary"} variant="flat">
              <span className={compact ? "text-xs" : ""}>{getStrengthInfo().label}</span>
            </Chip>
          </div>
          <Progress
            size={compact ? "sm" : "md"}
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
      )}
    </div>
  );
};
