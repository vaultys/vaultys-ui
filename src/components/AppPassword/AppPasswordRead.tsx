"use client";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, Tooltip, useDisclosure } from "@heroui/react";
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
}

export const AppPasswordRead: React.FC<AppPasswordReadProps> = ({ passwordData, locale, onEdit }) => {
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

    // Démarrer exactement au début d'une nouvelle seconde
    const msToNextSecond = Math.ceil(Date.now() / 1000) * 1000 - Date.now();

    const startTimer = () => {
      const generatedOtp = generateTOTP(passwordData.totpSecret);
      setOtp(generatedOtp);
      // Calculer la progression (0-100) basée sur le temps écoulé dans la période de 30s
      setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 30000) * 30000) / 300));
    };

    // Initialisation
    startTimer();

    // Configurer l'intervalle pour actualiser chaque seconde
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
    <div className="flex flex-col gap-2">
      {isEmptyPasswordData && <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center">{TRAD.no_credentials[locale]}</div>}

      {isInvalidTotpSecret && <div className="p-4 mb-2 bg-danger-100 dark:bg-danger-900/20 text-danger rounded-md">{TRAD.invalid_totp_secret[locale]}</div>}

      {passwordData?.username && passwordData.username.length > 0 && (
        <Input
          readOnly
          label={TRAD.username[locale]}
          value={passwordData.username}
          endContent={
            <div className="flex flex-row gap-2 items-center">
              <Tooltip content={TRAD.copy[locale]}>
                <div>{usernameCopied ? <FaCheck className="text-success" /> : <FaRegCopy className="cursor-pointer" onClick={handleCopyUsername} />}</div>
              </Tooltip>
            </div>
          }
        />
      )}
      {passwordData.password && passwordData.password.length > 0 && (
        <Input
          readOnly
          label={TRAD.password[locale]}
          value={showPassword ? passwordData.password : "********"}
          endContent={
            <div className="flex flex-row gap-2 items-center">
              {showPassword ? (
                <BiHide className="cursor-pointer" onClick={() => setShowPassword(false)} />
              ) : (
                <BiShow className="cursor-pointer" onClick={() => setShowPassword(true)} />
              )}
              <Tooltip content={TRAD.copy[locale]}>
                <div>{passwordCopied ? <FaCheck className="text-success" /> : <FaRegCopy className="cursor-pointer" onClick={handleCopyPassword} />}</div>
              </Tooltip>
            </div>
          }
        />
      )}
      {passwordData.totpSecret && passwordData.totpSecret.length === 16 && (
        <>
          <Input
            readOnly
            label={TRAD.otp[locale]}
            value={otp}
            endContent={
              <div className="flex flex-row gap-2 items-center">
                <Tooltip content={TRAD.copy[locale]}>
                  <div>{otpCopied ? <FaCheck className="text-success" /> : <FaRegCopy className="cursor-pointer" onClick={handleCopyOtp} />}</div>
                </Tooltip>
              </div>
            }
          />
          {passwordData.totpSecret && otpProgress !== null && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-linear" style={{ width: `${100 - otpProgress}%` }}></div>
            </div>
          )}
        </>
      )}

      {passwordData.secureNotes && passwordData.secureNotes.length > 0 && (
        <Textarea
          readOnly
          maxRows={3}
          minRows={3}
          label={TRAD.secure_notes[locale]}
          value={showSecureNotes ? passwordData.secureNotes : "********"}
          endContent={
            <div className="flex flex-row gap-2 items-center">
              {showSecureNotes ? (
                <BiHide className="cursor-pointer" onClick={() => setShowSecureNotes(false)} />
              ) : (
                <BiShow className="cursor-pointer" onClick={() => setShowSecureNotes(true)} />
              )}
              {passwordData.secureNotes.length > 100 && <FaExpand className="cursor-pointer" onClick={() => secureNotesOnOpen()} />}
            </div>
          }
        />
      )}

      <Button color="success" startContent={<FaRegEdit />} onPress={onEdit} className="mt-4">
        {TRAD.edit[locale]}
      </Button>

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
