"use client";
import { useState, useEffect } from "react";
import { Button, Input, Tab, Tabs, Textarea, Switch, Progress, Tooltip } from "@heroui/react";
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
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showSecureNotes, setShowSecureNotes] = useState<boolean>(false);
  const [totpEnabled, setTotpEnabled] = useState<boolean>(!!editedData.totpSecret);
  const [otp, setOtp] = useState<string>("");
  const [otpProgress, setOtpProgress] = useState<number>(0);
  const [isInvalidTotpSecret, setIsInvalidTotpSecret] = useState<boolean>(false);

  // Réinitialiser les données quand les props changent
  useEffect(() => {
    setEditedData({ ...passwordData });
    setTotpEnabled(!!passwordData.totpSecret);
  }, [passwordData]);

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

  // Fonction de gestion d'annulation pour réinitialiser l'onglet actif
  const handleCancel = () => {
    setActiveTab("credentials"); // Réinitialiser l'onglet à credentials
    onCancel(); // Appeler la fonction onCancel du parent
  };

  // Fonction de sauvegarde qui réinitialise l'onglet
  const handleSave = () => {
    setActiveTab("credentials");
    onSave(editedData);
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
    <div className="flex flex-col gap-4 w-full">
      <Tabs
        variant="underlined"
        size="sm"
        aria-label="Options"
        color="primary"
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key.toString())}
        classNames={{
          tabList: "gap-4",
          tab: "px-1 h-10 data-[selected=true]:text-primary",
        }}
      >
        <Tab
          key="credentials"
          title={
            <div className="flex items-center gap-2">
              <FaLock className="text-lg" />
              <span>{TRAD.credentials[locale]}</span>
            </div>
          }
        >
          <div className="py-4 space-y-5">
            <Input
              label={TRAD.username[locale]}
              placeholder={TRAD.enter_username[locale]}
              value={editedData.username || ""}
              onValueChange={(value) => setEditedData({ ...editedData, username: value })}
              size="md"
              startContent={<AiOutlineUser className="text-default-400" />}
            />

            <div>
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
              <MdFingerprint className="text-lg" />
              <span>{TRAD.two_factor_auth[locale]}</span>
            </div>
          }
        >
          <div className="py-4 space-y-5">
            <div className="flex items-start gap-2 text-sm text-default-600">
              <FaInfoCircle className="mt-0.5 flex-shrink-0 text-default-400" />
              <p>{TRAD.totp_explanation[locale]}</p>
            </div>

            <div className="flex items-center gap-2">
              <Switch isSelected={totpEnabled} onValueChange={setTotpEnabled} color="primary">
                <span className="text-medium">{TRAD.two_factor_auth[locale]}</span>
              </Switch>
            </div>

            {totpEnabled && (
              <div className="space-y-5">
                <Input
                  label={TRAD.otp[locale]}
                  placeholder={TRAD.enter_totp_secret[locale]}
                  value={editedData.totpSecret || ""}
                  onValueChange={updateTotpSecret}
                  color={isInvalidTotpSecret ? "danger" : "default"}
                  variant="flat"
                  size="md"
                  description={isInvalidTotpSecret ? TRAD.invalid_totp_secret[locale] : ""}
                />

                {editedData.totpSecret && editedData.totpSecret.length === 16 && otp && (
                  <div className="py-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-default-600">{TRAD.otp[locale]}</span>
                        {otpProgress !== null && <div className="text-xs text-default-500">{30 - Math.floor(otpProgress / 3.333)}s</div>}
                      </div>
                      <div className="flex justify-center">
                        <div className="text-2xl font-mono tracking-wider">{otp ? otp.match(/.{1,3}/g)?.join(" ") || otp : ""}</div>
                      </div>
                      <Progress aria-label="OTP Timer" size="md" value={100 - otpProgress} color="secondary" showValueLabel={false} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Tab>

        <Tab
          key="notes"
          title={
            <div className="flex items-center gap-2">
              <BsTextLeft className="text-lg" />
              <span>{TRAD.secure_notes[locale]}</span>
            </div>
          }
        >
          <div className="py-4 space-y-4">
            <div className="flex items-start gap-2 text-sm text-default-600">
              <FaInfoCircle className="mt-0.5 flex-shrink-0 text-default-400" />
              <p>{TRAD.secure_notes_explanation[locale]}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-medium block" htmlFor="secureNotes">
                  {TRAD.secure_notes[locale]}
                </label>
                <Tooltip content={showSecureNotes ? TRAD.hide[locale] : TRAD.show[locale]}>
                  <Button isIconOnly size="sm" variant="light" onPress={() => setShowSecureNotes(!showSecureNotes)}>
                    {showSecureNotes ? <BiHide /> : <BiShow />}
                  </Button>
                </Tooltip>
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
                variant="flat"
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

      <div className="mt-2">
        {hasChanges() && (
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-warning animate-pulse"></span>
            <span className="text-sm text-default-600">{TRAD.has_changes[locale]}</span>
          </div>
        )}

        <div className="flex flex-row gap-3 justify-end pt-3 border-t border-default-100">
          <Button color="danger" variant="light" startContent={<FaTimes />} onPress={handleCancel} className="min-w-[100px]">
            {TRAD.cancel[locale]}
          </Button>
          <Button
            color="success"
            variant="flat"
            startContent={<FaRegSave />}
            onPress={handleSave}
            isDisabled={(isInvalidTotpSecret && !!editedData.totpSecret) || !hasChanges()}
            className="min-w-[100px]"
          >
            {TRAD.save[locale]}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppPasswordEdit;
