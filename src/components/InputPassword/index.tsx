"use client";
import { Input } from "@heroui/react";
import { useState } from "react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { BiShow } from "@react-icons/all-files/bi/BiShow";

export interface InputPasswordProps {
  label: string;
  description?: string;
  onChange?: (value: string) => void;
  valid?: boolean;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  copyToClipboard?: boolean;
  color?: string;
  testId?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  description,
  onChange,
  valid = true,
  color,
  placeholder,
  value,
  disabled,
  copyToClipboard = false,
  testId,
}) => {
  const [show, setShow] = useState<boolean>();
  return (
    <Input
      autoComplete="off"
      data-test={testId}
      label={label}
      value={value}
      placeholder={placeholder}
      onValueChange={(value: string) => onChange && onChange(value)}
      classNames={{
        inputWrapper: color,
        label: `text-lg font-bold`,
        input: `font-mono`,
      }}
      description={description}
      isInvalid={!valid}
      isDisabled={disabled}
      endContent={
        <div className="flex flex-row gap-2 items-center">
          {copyToClipboard && (
            <BiCopy
              className="text-xl cursor-pointer dark:text-white"
              onClick={() => {
                if (value) {
                  navigator.clipboard.writeText(value);
                }
              }}
            />
          )}
          <button className="focus:outline-none" type="button" onClick={() => setShow(!show)}>
            {show ? <BiShow className="text-xl cursor-pointer dark:text-white" /> : <BiHide className="text-xl cursor-pointer dark:text-white" />}
          </button>
        </div>
      }
      type={show ? "text" : "password"}
    />
  );
};
