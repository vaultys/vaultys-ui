"use client";
import { useState, useEffect } from "react";
import { Button, Input, Tab, Tabs, Textarea, Switch, Card, Chip } from "@heroui/react";
import { FaRegSave } from "@react-icons/all-files/fa/FaRegSave";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { MdFingerprint } from "@react-icons/all-files/md/MdFingerprint";
import { BsTextLeft } from "@react-icons/all-files/bs/BsTextLeft";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { generateTOTP } from "../../lib/totp";
import { PasswordDataType, TRAD } from "./translations";
import { SelectPassword } from "../SelectPassword";

interface AppPasswordEditProps {
  passwordData: PasswordDataType;
  locale: "fr" | "en" | "es" | "de" | "zh";
  onSave: (data: PasswordDataType) => void;
  onCancel: () => void;
}

export const AppPasswordEdit: React.FC<AppPasswordEditProps> = ({ passwordData, locale, onSave, onCancel }) => {
  const [activeTab, setActiveTab] = useState<string>("credentials");
  const [editedData, setEditedData] = useState<PasswordDataType>({ ...passwordData });
  const [showSecureNotes, setShowSecureNotes] = useState<boolean>(false);
  const [totpEnabled, setTotpEnabled] = useState<boolean>(!!editedData.totpSecret);
  const [otp, setOtp] = useState<string>("");
  const [otpProgress, setOtpProgress] = useState<number>(0);
  const [isInvalidTotpSecret, setIsInvalidTotpSecret] = useState<boolean>(false);

  // Vérifier si des modifications ont été apportées
  const hasChanges = (): boolean => {
    return (
      editedData.username !== passwordData.username ||
      editedData.password !== passwordData.password ||
      editedData.totpSecret !== passwordData.totpSecret ||
      editedData.secureNotes !== passwordData.secureNotes
    );
  };

  // Mettre à jour le secret TOTP et gérer sa validation
  const updateTotpSecret = (value: string) => {
    const formattedValue = value.replace(/\s/g, "").toUpperCase();
    setEditedData({ ...editedData, totpSecret: formattedValue });

    if (formattedValue) {
      setIsInvalidTotpSecret(formattedValue.length !== 16);
    } else {
      setIsInvalidTotpSecret(false);
    }
  };

  // Gérer le changement de mot de passe
  const handlePasswordChange = (value: string) => {
    setEditedData({ ...editedData, password: value });
  };

  // Remplacer le mot de passe existant par un nouveau généré
  const handlePasswordOverwrite = (value: string) => {
    setEditedData({ ...editedData, password: value });
  };

  // Générer le code TOTP lorsque le secret est valide
  useEffect(() => {
    if (!editedData.totpSecret || editedData.totpSecret.length !== 16) {
      setOtp("");
      return;
    }

    try {
      // Démarrer exactement au début d'une nouvelle seconde
      const msToNextSecond = Math.ceil(Date.now() / 1000) * 1000 - Date.now();

      const startTimer = () => {
        try {
          const generatedOtp = generateTOTP(editedData.totpSecret);
          setOtp(generatedOtp);
          // Calculer la progression (0-100) basée sur le temps écoulé dans la période de 30s
          setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 30000) * 30000) / 300));
        } catch (error) {
          setOtp("");
          setIsInvalidTotpSecret(true);
        }
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
    } catch (error) {
      setOtp("");
      setIsInvalidTotpSecret(true);
    }
  }, [editedData.totpSecret]);

  // Mettre à jour l'état du TOTP activé/désactivé
  useEffect(() => {
    if (!totpEnabled && editedData.totpSecret) {
      setEditedData({ ...editedData, totpSecret: "" });
    }
  }, [totpEnabled]);

  return (
    <div className="flex flex-col gap-4">
      <Tabs aria-label="Options" color="primary" variant="underlined" selectedKey={activeTab} onSelectionChange={(key) => setActiveTab(key.toString())}>
        <Tab
          key="credentials"
          title={
            <div className="flex items-center gap-2">
              <FaLock />
              <span>{TRAD.credentials[locale]}</span>
            </div>
          }
        >
          <div className="mt-4 space-y-4">
            <Input
              label={TRAD.username[locale]}
              placeholder={TRAD.enter_username[locale]}
              value={editedData.username || ""}
              onValueChange={(value) => setEditedData({ ...editedData, username: value })}
              startContent={<AiOutlineUser className="text-default-400" />}
            />

            <div className="space-y-2">
              <SelectPassword
                label={TRAD.password[locale]}
                password={editedData.password || ""}
                onChange={handlePasswordChange}
                onOverwrite={handlePasswordOverwrite}
                locale={locale as "fr" | "en" | "es" | "de" | "zh"}
                passwordConfig={{
                  length: 16,
                  numbers: true,
                  capitalLetters: true,
                  lowercaseLetters: true,
                  specialCharacters: true,
                }}
              />
            </div>
          </div>
        </Tab>

        <Tab
          key="2fa"
          title={
            <div className="flex items-center gap-2">
              <MdFingerprint />
              <span>{TRAD.two_factor_auth[locale]}</span>
            </div>
          }
        >
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-sm">
              <p>{TRAD.totp_explanation[locale]}</p>
            </div>

            <div className="flex items-center gap-2">
              <Switch isSelected={totpEnabled} onValueChange={setTotpEnabled} color="primary">
                {TRAD.two_factor_auth[locale]}
              </Switch>
              <FaInfoCircle className="text-default-400" />
            </div>

            {totpEnabled && (
              <div className="space-y-4">
                <Input
                  label={TRAD.otp[locale]}
                  placeholder={TRAD.enter_totp_secret[locale]}
                  value={editedData.totpSecret || ""}
                  onValueChange={updateTotpSecret}
                  color={isInvalidTotpSecret ? "danger" : "default"}
                  description={isInvalidTotpSecret ? TRAD.invalid_totp_secret[locale] : ""}
                />

                {editedData.totpSecret && editedData.totpSecret.length === 16 && otp && (
                  <Card className="p-4">
                    <div className="flex flex-col gap-2">
                      <div className="text-center">
                        <p className="text-sm text-default-500">{TRAD.otp[locale]}</p>
                        <p className="text-2xl font-mono font-bold tracking-wider">{otp}</p>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-linear" style={{ width: `${100 - otpProgress}%` }}></div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        </Tab>

        <Tab
          key="notes"
          title={
            <div className="flex items-center gap-2">
              <BsTextLeft />
              <span>{TRAD.secure_notes[locale]}</span>
            </div>
          }
        >
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-sm">
              <p>{TRAD.secure_notes_explanation[locale]}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-medium font-medium" htmlFor="secureNotes">
                  {TRAD.secure_notes[locale]}
                </label>
                <Button isIconOnly size="sm" variant="light" onPress={() => setShowSecureNotes(!showSecureNotes)}>
                  {showSecureNotes ? <BiHide /> : <BiShow />}
                </Button>
              </div>

              <Textarea
                id="secureNotes"
                placeholder={TRAD.enter_secure_notes[locale]}
                value={editedData.secureNotes || ""}
                onValueChange={(value) => {
                  if (value.length <= 1000) {
                    setEditedData({ ...editedData, secureNotes: value });
                  }
                }}
                minRows={4}
                maxRows={8}
                classNames={{
                  input: `${!showSecureNotes ? "blur-sm font-mono" : "font-mono"}`,
                  base: "w-full",
                }}
              />

              {(editedData.secureNotes?.length || 0) > 0 && <div className="text-xs text-right text-default-500">{editedData.secureNotes?.length}/1000</div>}
            </div>
          </div>
        </Tab>
      </Tabs>

      <div>
        {hasChanges() && (
          <Chip color="warning" variant="flat" className="mb-2">
            {TRAD.has_changes[locale]}
          </Chip>
        )}

        <div className="flex flex-row gap-2 justify-end mt-2 pt-4 border-t border-default-200">
          <Button color="danger" variant="flat" startContent={<FaTimes />} onPress={onCancel}>
            {TRAD.cancel[locale]}
          </Button>
          <Button
            color="success"
            startContent={<FaRegSave />}
            onPress={() => onSave(editedData)}
            isDisabled={(isInvalidTotpSecret && !!editedData.totpSecret) || !hasChanges()}
          >
            {TRAD.save[locale]}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppPasswordEdit;
