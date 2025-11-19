"use client";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, Tooltip, useDisclosure, Card, Progress } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaRegCopy } from "@react-icons/all-files/fa/FaRegCopy";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaExpand } from "@react-icons/all-files/fa/FaExpand";
import { FaRegEdit } from "@react-icons/all-files/fa/FaRegEdit";
import { generateTOTP } from "../../lib/totp";
import { TRAD, PasswordDataType } from "./translations";
import { AnimatePresence, motion } from "framer-motion";

interface AppPasswordReadProps {
  passwordData: PasswordDataType;
  locale: "fr" | "en" | "es" | "de" | "zh";
  onEdit: () => void;
  readonly?: boolean;
  compact?: boolean;
}

export const AppPasswordRead: React.FC<AppPasswordReadProps> = ({ passwordData, locale, onEdit, readonly = false, compact = false }) => {
  const [usernameCopied, setUsernameCopied] = useState<boolean>(false);
  const [passwordCopied, setPasswordCopied] = useState<boolean>(false);
  const [otpCopied, setOtpCopied] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>();
  const [otpProgress, setOtpProgress] = useState<number>(0);
  const [showSecureNotes, setShowSecureNotes] = useState<boolean>(false);

  const { isOpen: secureNotesIsOpen, onOpen: secureNotesOnOpen, onClose: secureNotesOnClose } = useDisclosure();
  const [isInvalidTotpSecret, setIsInvalidTotpSecret] = useState<boolean>(false);

  useEffect(() => {
    if (!passwordData?.totpSecret) {
      setIsInvalidTotpSecret(false);
      return;
    }

    // Tester d'abord la validité de la clé
    try {
      generateTOTP(passwordData.totpSecret);
      setIsInvalidTotpSecret(false);
    } catch (error) {
      setOtp(undefined);
      setIsInvalidTotpSecret(true);
      return;
    }

    // Si la clé est valide, démarrer le timer
    const msToNextSecond = Math.ceil(Date.now() / 1000) * 1000 - Date.now();

    const startTimer = () => {
      try {
        const generatedOtp = generateTOTP(passwordData.totpSecret);
        setOtp(generatedOtp);
        setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 30000) * 30000) / 300));
      } catch (error) {
        setOtp(undefined);
        setIsInvalidTotpSecret(true);
      }
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
      }, 3000);
    }
  };

  const handleCopyPassword = () => {
    if (passwordData.password) {
      navigator.clipboard.writeText(passwordData.password);
      setPasswordCopied(true);
      setTimeout(() => {
        setPasswordCopied(false);
      }, 3000);
    }
  };

  const handleCopyOtp = () => {
    if (otp) {
      navigator.clipboard.writeText(otp);
      setOtpCopied(true);
      setTimeout(() => {
        setOtpCopied(false);
      }, 3000);
    }
  };

  const isEmptyPasswordData = !passwordData?.username && !passwordData?.password && !passwordData?.totpSecret && !passwordData?.secureNotes;

  return (
    <div className={`flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`}>
      {isEmptyPasswordData && (
        <Card className={`bg-default-50 border-none ${compact ? "p-3" : "p-6"}`}>
          <div className="flex flex-col items-center justify-center text-center">
            <div className={`mb-2 ${compact ? "text-2xl" : "text-4xl mb-3"}`}>🔒</div>
            <p className={`text-default-600 ${compact ? "text-sm" : ""}`}>{TRAD.no_credentials[locale]}</p>
          </div>
        </Card>
      )}

      {isInvalidTotpSecret && (
        <div className={`bg-danger-100 text-danger rounded-lg border border-danger/20 shadow-sm ${compact ? "p-2 mb-1" : "p-4 mb-2"}`}>
          <div className="flex items-center gap-2">
            <span className={compact ? "text-base" : "text-lg"}>⚠️</span>
            <span className={compact ? "text-sm" : ""}>{TRAD.invalid_totp_secret[locale]}</span>
          </div>
        </div>
      )}

      {passwordData?.username && passwordData.username.length > 0 && (
        <div className="relative">
          <Input
            onClick={handleCopyUsername}
            readOnly
            label={TRAD.username[locale]}
            value={passwordData.username}
            size={compact ? "sm" : "md"}
            classNames={{
              input: "cursor-copy",
            }}
            endContent={
              <div className="flex flex-row gap-2 items-center">
                <Tooltip content={TRAD.copy[locale]}>
                  <button className="p-1 rounded-md hover:bg-default-200 transition-colors">
                    <FaRegCopy className="cursor-pointer" onClick={handleCopyUsername} />
                  </button>
                </Tooltip>
              </div>
            }
          />
          <AnimatePresence>
            {usernameCopied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                {TRAD.copied[locale]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {passwordData.password && passwordData.password.length > 0 && (
        <div className="relative">
          <Input
            readOnly
            onClick={handleCopyPassword}
            label={TRAD.password[locale]}
            type={showPassword ? "text" : "password"}
            value={showPassword ? passwordData.password : "********"}
            size={compact ? "sm" : "md"}
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
                <Tooltip content={TRAD.copy[locale]}>
                  <button className="p-1 rounded-md hover:bg-default-200 transition-colors">
                    <FaRegCopy className="cursor-pointer" onClick={handleCopyPassword} />
                  </button>
                </Tooltip>
              </div>
            }
          />
          <AnimatePresence>
            {passwordCopied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                {TRAD.copied[locale]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {passwordData.totpSecret && !isInvalidTotpSecret && otp && (
        <div className="relative">
          <div
            className={`${otpCopied ? "bg-success-50 text-success-600" : "bg-default-100"} rounded-large cursor-copy ${compact ? "p-2" : "p-4"}`}
            onClick={handleCopyOtp}
          >
            <div className={`flex flex-col ${compact ? "gap-1" : "gap-2"}`}>
              <div className="flex justify-between items-center">
                <span className={compact ? "text-sm" : ""}>{TRAD.otp[locale]}</span>
                {passwordData.totpSecret && otpProgress !== null && <div className="text-xs text-default-500">{30 - Math.floor(otpProgress / 3.333)}s</div>}
              </div>
              <div className="relative">
                <div className="flex justify-center items-center">
                  <div className={`font-mono tracking-wider ${compact ? "text-lg px-2 py-1" : "text-2xl px-4 py-2"}`}>
                    {otp ? otp.match(/.{1,3}/g)?.join(" ") || otp : ""}
                  </div>
                  <Tooltip content={TRAD.copy[locale]}>
                    <button className={`p-1 rounded-md hover:bg-default-200 transition-colors ${compact ? "ml-1" : "ml-2"}`}>
                      <FaRegCopy className={`cursor-pointer ${compact ? "text-sm" : ""}`} onClick={handleCopyOtp} />
                    </button>
                  </Tooltip>
                </div>
              </div>
              {passwordData.totpSecret && otpProgress !== null && (
                <Progress
                  aria-label="OTP Timer"
                  size={compact ? "sm" : "md"}
                  value={100 - otpProgress}
                  color="secondary"
                  className={compact ? "" : "mt-1"}
                  showValueLabel={false}
                />
              )}
            </div>
          </div>
          <AnimatePresence>
            {otpCopied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                {TRAD.copied[locale]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {passwordData.secureNotes && passwordData.secureNotes.length > 0 && (
        <Textarea
          readOnly
          maxRows={compact ? 2 : 3}
          minRows={compact ? 2 : 3}
          label={TRAD.secure_notes[locale]}
          value={showSecureNotes ? passwordData.secureNotes : "********"}
          size={compact ? "sm" : "md"}
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
        <Button color="primary" variant="flat" startContent={<FaRegEdit />} onPress={onEdit} className={compact ? "mt-1" : "mt-2"} size={compact ? "md" : "lg"} fullWidth>
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
