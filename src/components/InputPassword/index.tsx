"use client";
import { Input } from "@nextui-org/react";
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
  dark?: boolean;
  testId?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ label, description, onChange, valid = true, dark = false, placeholder, value, disabled, copyToClipboard = false, testId }) => {
  const [show, setShow] = useState<boolean>();
  return (
    <Input
      data-test={testId}
      label={label}
      value={value}
      placeholder={placeholder}
      onValueChange={(value: string) => onChange && onChange(value)}
      classNames={{
        inputWrapper: dark ? "bg-default-800 text-white" : "bg-default-000 text-black",
        label: `vui-text-lg vui-font-bold`,
      }}
      description={description}
      isInvalid={!valid}
      isDisabled={disabled}
      endContent={
        <div className={`vui-flex vui-flex-row vui-gap-2 vui-items-center ${dark ? "vui-text-white" : "vui-text-black"}`}>
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
