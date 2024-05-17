"use client";
import { Button, Checkbox, Slider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BsCopy } from "react-icons/bs";
import { FaFaceFrown, FaFaceGrin, FaFaceMeh, FaFaceSmile } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";

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

export type PassphraseConfig = {};

export interface PasswordGeneratorProps {
  passwordType?: PasswordType;
  passwordConfig?: PasswordConfig;
  passphraseConfig?: PassphraseConfig;
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

export const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ passwordType, passwordConfig, passphraseConfig }) => {
  const [length, setLength] = useState<number>(passwordConfig?.length ?? 16);
  const [numbers, setNumbers] = useState<boolean>(passwordConfig?.numbers ?? true);
  const [capitalLetters, setCapitalLetters] = useState<boolean>(passwordConfig?.capitalLetters ?? true);
  const [lowercaseLetters, setLowercaseLetters] = useState<boolean>(passwordConfig?.lowercaseLetters ?? true);
  const [specialCharacters, setSpecialCharacters] = useState<boolean>(passwordConfig?.specialCharacters ?? true);
  const [type, setType] = useState<PasswordType>(passwordType ?? PasswordType.PASSWORD);
  const [robustness, setRobustness] = useState<ROBUSTNESS>(ROBUSTNESS.GOOD);
  const [copied, setCopied] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("WrG3q!nmGgK^LLdw*ih7!n");

  useEffect(() => {
    if (!numbers && !capitalLetters && !lowercaseLetters && !specialCharacters) setLowercaseLetters(true);
    else {
      generatePassword();
    }
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters]);

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

  useEffect(() => {
    setCopied(false);
  }, [password]);

  const passwordStrength = () => {
    switch (robustness) {
      case ROBUSTNESS.BAD:
        return <FaFaceFrown className="vui-text-danger vui-w-16 vui-h-16 vui-mx-auto" />;
      case ROBUSTNESS.MINIMAL:
        return <FaFaceMeh className="vui-text-warning vui-w-16 vui-h-16 vui-mx-auto" />;
      case ROBUSTNESS.GOOD:
        return <FaFaceSmile className="vui-text-success vui-w-16 vui-h-16 vui-mx-auto" />;
      case ROBUSTNESS.ROBUST:
        return <FaFaceGrin className="vui-text-success vui-w-16 vui-h-16 vui-mx-auto" />;

      default:
        break;
    }
  };

  return (
    <div className="vui-flex vui-flex-col vui-gap-2 vui-w-full vui-bg-light dark:vui-bg-dark vui-p-4 vui-text-black dark:vui-text-white vui-rounded-large">
      <div
        className={`vui-flex vui-flex-row vui-flex-shrink-0 vui-justify-between vui-gap-4 vui-border-2 vui-p-4 vui-rounded-large vui-transition-all vui-duration-1000  ${
          copied ? "vui-border-success vui-bg-success" : "vui-border-modern-blue"
        }`}
      >
        <span
          onClick={() => {
            navigator.clipboard.writeText(password);
            setCopied(true);
          }}
          className={`vui-grow-0 vui-font-bold vui-cursor-copy vui-break-all vui-w-11/12`}
        >
          {password}
        </span>
        <BsCopy className="vui-w-6 vui-h-6" />
      </div>
      {passwordStrength()}
      <Slider
        label={`Length`}
        minValue={8}
        maxValue={128}
        defaultValue={length}
        onChange={(value) => setLength(value as number)}
        onChangeEnd={generatePassword}
        size="lg"
        classNames={{
          filler: "vui-bg-modern-blue",
          track: "vui-border-s-modern-blue vui-bg-light-secondary dark:vui-bg-dark-secondary",
          thumb: "vui-bg-black dark:vui-bg-white",
        }}
      />
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
      <Button startContent={<FiRefreshCcw />} onPress={generatePassword} color="success">
        Regenerate
      </Button>
    </div>
  );
};
