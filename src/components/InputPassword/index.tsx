"use client";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { BiCopy, BiHide, BiShow } from "react-icons/bi";

export interface InputPasswordProps {
  label: string;
  description?: string;
  onChange?: (value: string) => void;
  valid?: boolean;
  placeholder?: string;
  value?: string;
  className?: string;
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
  placeholder,
  value,
  disabled,
  copyToClipboard = false,
  color,
  testId,
}) => {
  const [show, setShow] = useState<boolean>();
  return (
    <Input
      data-test={testId}
      label={label}
      value={value}
      placeholder={placeholder}
      onValueChange={(value: string) => onChange && onChange(value)}
      classNames={{
        inputWrapper: color,
        label: "vui-text-lg vui-font-bold",
      }}
      description={description}
      isInvalid={!valid}
      isDisabled={disabled}
      endContent={
        <div className="vui-flex vui-flex-row vui-gap-2 vui-items-center">
          {copyToClipboard && (
            <BiCopy
              className="vui-text-xl vui-cursor-pointer"
              onClick={() => {
                if (value) {
                  navigator.clipboard.writeText(value);
                }
              }}
            />
          )}
          <button className="focus:vui-outline-none" type="button" onClick={() => setShow(!show)}>
            {show ? <BiShow className="vui-text-xl vui-cursor-pointer" /> : <BiHide className="vui-text-xl vui-cursor-pointer" />}
          </button>
        </div>
      }
      type={show ? "text" : "password"}
    />
  );
};
