"use client";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, Tooltip, useDisclosure, Card, Progress } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaRegCopy } from "@react-icons/all-files/fa/FaRegCopy";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaExpand } from "@react-icons/all-files/fa/FaExpand";
import { FaRegEdit } from "@react-icons/all-files/fa/FaRegEdit";
import { generateTOTP } from "../../lib/totp";
import { TRAD, PasswordDataType } from "./translations";

interface AppPasswordReadProps {
  passwordData: PasswordDataType;
  locale: "fr" | "en" | "es" | "de" | "zh";
  onEdit: () => void;
  readonly?: boolean;
}

export const AppPasswordRead: React.FC<AppPasswordReadProps> = ({ passwordData, locale, onEdit, readonly = false }) => {
  const [usernameCopied, setUsernameCopied] = useState<boolean>(false);
  const [passwordCopied, setPasswordCopied] = useState<boolean>(false);
  const [otpCopied, setOtpCopied] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>();
  const [otpProgress, setOtpProgress] = useState<number>(0);
  const [showSecureNotes, setShowSecureNotes] = useState<boolean>(false);

  const { isOpen: secureNotesIsOpen, onOpen: secureNotesOnOpen, onClose: secureNotesOnClose } = useDisclosure();

  useEffect(() => {
    if (!passwordData?.totpSecret) return;

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

  const isEmptyPasswordData = !passwordData?.username && !passwordData?.password && !passwordData?.totpSecret && !passwordData?.secureNotes;

  const isInvalidTotpSecret = passwordData?.totpSecret && passwordData.totpSecret.length !== 16;

  return (
    <div className="flex flex-col gap-4 w-full">
      {isEmptyPasswordData && (
        <Card className="p-6 bg-default-50 border-none">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-3">🔒</div>
            <p className="text-default-600">{TRAD.no_credentials[locale]}</p>
          </div>
        </Card>
      )}

      {isInvalidTotpSecret && (
        <div className="p-4 mb-2 bg-danger-100 text-danger rounded-lg border border-danger/20 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚠️</span>
            <span>{TRAD.invalid_totp_secret[locale]}</span>
          </div>
        </div>
      )}

      {passwordData?.username && passwordData.username.length > 0 && (
        <Input
          onClick={handleCopyUsername}
          color={usernameCopied ? "success" : "default"}
          readOnly
          label={TRAD.username[locale]}
          value={passwordData.username}
          classNames={{
            input: "cursor-copy",
          }}
          endContent={
            <div className="flex flex-row gap-2 items-center">
              <Tooltip content={usernameCopied ? TRAD.copy[locale] + "!" : TRAD.copy[locale]} color={usernameCopied ? "success" : "default"}>
                <button className="p-1 rounded-md hover:bg-default-200 transition-colors">
                  {usernameCopied ? <FaCheck className="text-success" /> : <FaRegCopy className="cursor-pointer" onClick={handleCopyUsername} />}
                </button>
              </Tooltip>
            </div>
          }
        />
      )}

      {passwordData.password && passwordData.password.length > 0 && (
        <Input
          readOnly
          onClick={handleCopyPassword}
          color={passwordCopied ? "success" : "default"}
          label={TRAD.password[locale]}
          type={showPassword ? "text" : "password"}
          value={showPassword ? passwordData.password : "********"}
          classNames={{
            input: "cursor-copy",
          }}
          endContent={
            <div className="flex flex-row gap-2 items-center">
              <Tooltip content={showPassword ? TRAD.hide[locale] : TRAD.show[locale]}>
                <button className="p-1 rounded-md hover:bg-default-200 transition-colors">
                  {showPassword ? (
                    <BiHide className="cursor-pointer" onClick={() => setShowPassword(false)} />
                  ) : (
                    <BiShow className="cursor-pointer" onClick={() => setShowPassword(true)} />
                  )}
                </button>
              </Tooltip>
              <Tooltip content={passwordCopied ? TRAD.copy[locale] + "!" : TRAD.copy[locale]} color={passwordCopied ? "success" : "default"}>
                <button className="p-1 rounded-md hover:bg-default-200 transition-colors">
                  {passwordCopied ? <FaCheck className="text-success" /> : <FaRegCopy className="cursor-pointer" onClick={handleCopyPassword} />}
                </button>
              </Tooltip>
            </div>
          }
        />
      )}

      {passwordData.totpSecret && passwordData.totpSecret.length === 16 && (
        <div className={`${otpCopied ? "bg-success-50 text-success-600" : "bg-default-100"} p-4 rounded-large cursor-copy`} onClick={handleCopyOtp}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              {TRAD.otp[locale]}

              {passwordData.totpSecret && otpProgress !== null && <div className="text-xs text-default-500">{30 - Math.floor(otpProgress / 3.333)}s</div>}
            </div>
            <div className="relative">
              <div className="flex justify-center items-center">
                <div className="text-2xl font-mono tracking-wider  px-4 py-2">{otp ? otp.match(/.{1,3}/g)?.join(" ") || otp : ""}</div>
                <Tooltip content={otpCopied ? TRAD.copy[locale] + "!" : TRAD.copy[locale]} color={otpCopied ? "success" : "default"}>
                  <button className="p-1 rounded-md ml-2 hover:bg-default-200 transition-colors">
                    {otpCopied ? <FaCheck className="text-success" /> : <FaRegCopy className="cursor-pointer" onClick={handleCopyOtp} />}
                  </button>
                </Tooltip>
              </div>
            </div>
            {passwordData.totpSecret && otpProgress !== null && (
              <Progress aria-label="OTP Timer" size="md" value={100 - otpProgress} color="secondary" className="mt-1" showValueLabel={false} />
            )}
          </div>
        </div>
      )}

      {passwordData.secureNotes && passwordData.secureNotes.length > 0 && (
        <Textarea
          readOnly
          maxRows={3}
          minRows={3}
          label={TRAD.secure_notes[locale]}
          value={showSecureNotes ? passwordData.secureNotes : "********"}
          className="hover:border-primary focus:border-primary transition-all"
          endContent={
            <div className="flex flex-row gap-2 items-center">
              <Tooltip content={showSecureNotes ? TRAD.hide[locale] : TRAD.show[locale]}>
                <button className="p-1 rounded-md hover:bg-default-200 transition-colors">
                  {showSecureNotes ? (
                    <BiHide className="cursor-pointer" onClick={() => setShowSecureNotes(false)} />
                  ) : (
                    <BiShow className="cursor-pointer" onClick={() => setShowSecureNotes(true)} />
                  )}
                </button>
              </Tooltip>
              {passwordData.secureNotes.length > 100 && (
                <Tooltip content={TRAD.secure_notes[locale]}>
                  <button className="p-1 rounded-md hover:bg-default-200 transition-colors">
                    <FaExpand className="cursor-pointer" onClick={() => secureNotesOnOpen()} />
                  </button>
                </Tooltip>
              )}
            </div>
          }
        />
      )}
      {!readonly && (
        <Button color="primary" variant="flat" startContent={<FaRegEdit />} onPress={onEdit} className="mt-2" fullWidth>
          {TRAD.edit[locale]}
        </Button>
      )}
      <Modal
        backdrop="blur"
        classNames={{
          base: "bg-background",
          header: "border-b border-divider",
          footer: "border-t border-divider",
          body: "py-6",
        }}
        scrollBehavior="inside"
        isOpen={secureNotesIsOpen}
        onClose={secureNotesOnClose}
      >
        <ModalContent>
          <ModalHeader>{TRAD.secure_notes[locale]}</ModalHeader>
          <ModalBody>
            <Textarea readOnly label={TRAD.secure_notes[locale]} value={passwordData.secureNotes} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AppPasswordRead;
