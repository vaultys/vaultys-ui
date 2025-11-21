"use client";
import { useState, useEffect } from "react";
import { Button, Input, Tab, Tabs, Textarea, Switch, Progress, Tooltip, Chip } from "@heroui/react";
import { FaRegSave } from "@react-icons/all-files/fa/FaRegSave";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { MdFingerprint } from "@react-icons/all-files/md/MdFingerprint";
import { BsTextLeft } from "@react-icons/all-files/bs/BsTextLeft";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { FaCog } from "@react-icons/all-files/fa/FaCog";
import { FaRegCopy } from "@react-icons/all-files/fa/FaRegCopy";
import { FiRefreshCcw } from "@react-icons/all-files/fi/FiRefreshCcw";
import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";
import { generateTOTP } from "../../lib/totp";
import { PasswordDataType, TRAD } from "./translations";
import { useConfirmModal } from "../ConfirmModal";
import { PasswordConfig } from "../PasswordGenerator";
import { AnimatePresence, motion } from "framer-motion";
import PasswordEntropy from "@rabbit-company/password-entropy";

interface AppPasswordEditProps {
  passwordData: PasswordDataType;
  locale: "fr" | "en" | "es" | "de" | "zh";
  onSave: (data: PasswordDataType) => void;
  onCancel: () => void;
  onGeneratorConfig?: () => void;
  passwordConfig?: PasswordConfig;
  compact?: boolean;
}

export const AppPasswordEdit: React.FC<AppPasswordEditProps> = ({
  passwordData,
  locale,
  onSave,
  onCancel,
  onGeneratorConfig,
  passwordConfig = {
    capitalLetters: true,
    length: 16,
    lowercaseLetters: true,
    numbers: true,
    specialCharacters: true,
  },
  compact = false,
}) => {
  const confirmModal = useConfirmModal();
  const [activeTab, setActiveTab] = useState<string>("credentials");
  const [editedData, setEditedData] = useState<PasswordDataType>({ ...passwordData });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showSecureNotes, setShowSecureNotes] = useState<boolean>(false);
  const [totpEnabled, setTotpEnabled] = useState<boolean>(!!editedData.totpSecret);
  const [otp, setOtp] = useState<string>("");
  const [otpProgress, setOtpProgress] = useState<number>(0);
  const [isInvalidTotpSecret, setIsInvalidTotpSecret] = useState<boolean>(false);
  const [usernameCopied, setUsernameCopied] = useState<boolean>(false);
  const [passwordCopied, setPasswordCopied] = useState<boolean>(false);
  const [otpCopied, setOtpCopied] = useState<boolean>(false);
  const [entropy, setEntropy] = useState<number>(0);
  const [robustness, setRobustness] = useState<number>(0);

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
      try {
        generateTOTP(formattedValue);
        setIsInvalidTotpSecret(false);
      } catch (error) {
        setIsInvalidTotpSecret(true);
      }
    } else {
      setIsInvalidTotpSecret(false);
    }
  };

  // Générer un mot de passe aléatoire
  const generatePassword = () => {
    const CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
    const NUMBERS = "0123456789";
    const SPECIAL_CHARS = ".,;:?!'\"@#%&*+-_=()[]{}<>/\\|~^";

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
    setEditedData({ ...editedData, password: newPassword });
    setShowPassword(true);
  };

  // Gérer le changement de mot de passe
  const handlePasswordChange = (value: string) => {
    setEditedData({ ...editedData, password: value });
  };

  // Fonction de gestion d'annulation avec confirmation si des modifications existent
  const handleCancel = async () => {
    if (hasChanges()) {
      const confirmed = await confirmModal.show({
        header: TRAD.unsaved_changes_title[locale],
        alert: TRAD.unsaved_changes_message[locale],
        alertDescription: TRAD.unsaved_changes_description[locale],
        cancelText: TRAD.cancel[locale],
        acceptText: TRAD.discard[locale],
        color: "warning",
      });

      if (!confirmed) {
        return;
      }
    }

    setActiveTab("credentials");
    onCancel();
  };

  // Fonction de sauvegarde qui réinitialise l'onglet
  const handleSave = () => {
    setActiveTab("credentials");
    onSave(editedData);
  };

  // Hook pour gérer les modifications non sauvegardées lors du démontage du composant
  useEffect(() => {
    return () => {
      // Nettoyage si nécessaire
    };
  }, []);

  // Générer le code TOTP lorsque le secret est valide
  useEffect(() => {
    if (!editedData.totpSecret) {
      setOtp("");
      setIsInvalidTotpSecret(false);
      return;
    }

    // Tester d'abord la validité de la clé
    try {
      generateTOTP(editedData.totpSecret);
      setIsInvalidTotpSecret(false);
    } catch (error) {
      setOtp("");
      setIsInvalidTotpSecret(true);
      return;
    }

    // Si la clé est valide, démarrer le timer
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
  }, [editedData.totpSecret]);

  // Mettre à jour l'état du TOTP activé/désactivé
  useEffect(() => {
    if (!totpEnabled && editedData.totpSecret) {
      setEditedData({ ...editedData, totpSecret: "" });
    }
  }, [totpEnabled]);

  // Calculer l'entropie du mot de passe
  useEffect(() => {
    if (editedData.password) {
      const calculatedEntropy = PasswordEntropy.calculate(editedData.password);
      setEntropy(calculatedEntropy);
    } else {
      setEntropy(0);
    }
  }, [editedData.password]);

  // Déterminer la robustesse basée sur l'entropie
  useEffect(() => {
    if (entropy < 36) setRobustness(0);
    else if (entropy < 60) setRobustness(1);
    else if (entropy < 120) setRobustness(2);
    else setRobustness(3);
  }, [entropy]);

  const getStrengthInfo = () => {
    const strengthLabels = {
      fr: ["Très faible", "Faible", "Fort", "Très fort"],
      en: ["Very weak", "Weak", "Strong", "Very strong"],
      es: ["Muy débil", "Débil", "Fuerte", "Muy fuerte"],
      de: ["Sehr schwach", "Schwach", "Stark", "Sehr stark"],
      zh: ["非常弱", "弱", "强", "非常强"],
    };
    const colors = ["danger", "warning", "success", "primary"];

    return {
      label: strengthLabels[locale]?.[robustness] || strengthLabels.en[robustness],
      color: colors[robustness] as "danger" | "warning" | "success" | "primary",
    };
  };

  return (
    <div className={`flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`}>
      {/* Banner et boutons fixes en haut */}
      {hasChanges() && (
        <div className="sticky top-0 z-10 bg-content1 -mx-1 px-1 pb-3 border-b-2 border-default-200">
          <div className={`bg-warning-50 border-l-4 border-warning rounded-r-lg flex items-start gap-2 ${compact ? "p-2 mb-2" : "p-4 mb-3 gap-3"}`}>
            <FaInfoCircle className={`text-warning shrink-0 mt-0.5 ${compact ? "text-base" : "text-xl"}`} />
            <div className="flex-1">
              <p className={`font-semibold text-warning-700 ${compact ? "text-sm" : ""}`}>{TRAD.unsaved_changes_title[locale]}</p>
              <p className={`text-warning-600 ${compact ? "text-xs mt-0.5" : "text-sm mt-1"}`}>{TRAD.unsaved_changes_message[locale]}</p>
            </div>
          </div>

          <div className={`flex flex-row justify-end ${compact ? "gap-2" : "gap-3"}`}>
            <Button
              color="default"
              variant="flat"
              startContent={<FaTimes />}
              onPress={handleCancel}
              size={compact ? "md" : "lg"}
              className={compact ? "min-w-[100px]" : "min-w-[120px]"}
            >
              {TRAD.cancel[locale]}
            </Button>
            <Button
              color="primary"
              variant="shadow"
              startContent={<FaRegSave />}
              onPress={handleSave}
              isDisabled={(isInvalidTotpSecret && !!editedData.totpSecret) || !hasChanges()}
              size={compact ? "md" : "lg"}
              className={`${compact ? "min-w-[100px]" : "min-w-[120px]"} animate-in zoom-in-95`}
            >
              {TRAD.save[locale]}
            </Button>
          </div>
        </div>
      )}

      <Tabs
        variant="underlined"
        size="sm"
        aria-label="Options"
        color="primary"
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key.toString())}
        classNames={{
          tabList: compact ? "gap-1" : "gap-4",
          tab: compact ? "px-1 h-8 data-[selected=true]:text-primary" : "px-1 h-10 data-[selected=true]:text-primary",
        }}
      >
        <Tab
          key="credentials"
          title={
            compact ? (
              <Tooltip content={TRAD.credentials[locale]}>
                <div className="flex items-center">
                  <FaLock className="text-base" />
                </div>
              </Tooltip>
            ) : (
              <div className="flex items-center gap-2">
                <FaLock className="text-lg" />
                <span>{TRAD.credentials[locale]}</span>
              </div>
            )
          }
        >
          <div className={compact ? "py-2 space-y-3" : "py-4 space-y-5"}>
            <div className="relative">
              <Input
                label={TRAD.username[locale]}
                placeholder={TRAD.enter_username[locale]}
                value={editedData.username || ""}
                onValueChange={(value) => setEditedData({ ...editedData, username: value })}
                size={compact ? "sm" : "md"}
                startContent={<AiOutlineUser className="text-default-400" />}
                endContent={
                  <Tooltip content={TRAD.copy[locale]}>
                    <button
                      className="p-1 rounded-md hover:bg-default-200 transition-colors"
                      onClick={() => {
                        if (editedData.username) {
                          navigator.clipboard.writeText(editedData.username);
                          setUsernameCopied(true);
                          setTimeout(() => setUsernameCopied(false), 3000);
                        }
                      }}
                    >
                      <FaRegCopy className="cursor-pointer" />
                    </button>
                  </Tooltip>
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

            <div className={compact ? "space-y-1" : "space-y-2"}>
              <div className="flex items-center justify-between">
                <span className={compact ? "text-xs" : "text-sm"}>{TRAD.password[locale]}</span>
                <div className="flex items-center gap-2">
                  <Button size="sm" color="primary" onPress={generatePassword} startContent={<FiRefreshCcw />}>
                    {TRAD.generate_password[locale]}
                  </Button>
                  {onGeneratorConfig && (
                    <Tooltip content={TRAD.configure_generator[locale]}>
                      <Button isIconOnly size="sm" variant="light" onPress={onGeneratorConfig}>
                        <FaCog className="text-default-400" />
                      </Button>
                    </Tooltip>
                  )}
                </div>
              </div>
              <div className="relative">
                <Input
                  value={editedData.password || ""}
                  type={showPassword ? "text" : "password"}
                  onValueChange={handlePasswordChange}
                  size={compact ? "sm" : "md"}
                  classNames={{
                    input: "font-mono",
                  }}
                  endContent={
                    <div className="flex flex-row gap-2 items-center">
                      <Tooltip content={showPassword ? TRAD.hide[locale] : TRAD.show[locale]}>
                        <button className="p-1 rounded-md hover:bg-default-200 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <BiHide className="cursor-pointer" /> : <BiShow className="cursor-pointer" />}
                        </button>
                      </Tooltip>
                      <Tooltip content={TRAD.copy[locale]}>
                        <button
                          className="p-1 rounded-md hover:bg-default-200 transition-colors"
                          onClick={() => {
                            if (editedData.password) {
                              navigator.clipboard.writeText(editedData.password);
                              setPasswordCopied(true);
                              setTimeout(() => setPasswordCopied(false), 3000);
                            }
                          }}
                        >
                          <FaRegCopy className="cursor-pointer" />
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

              {editedData.password && editedData.password.length > 0 && (
                <div className={compact ? "space-y-1 mt-2" : "space-y-2 mt-3"}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium text-default-600 ${compact ? "text-xs" : "text-sm"}`}>
                        {locale === "fr"
                          ? "Force du mot de passe"
                          : locale === "es"
                          ? "Fuerza de la contraseña"
                          : locale === "de"
                          ? "Passwortstärke"
                          : locale === "zh"
                          ? "密码强度"
                          : "Password strength"}
                      </span>
                      <Tooltip
                        content={
                          locale === "fr"
                            ? "Plus vous utilisez de types de caractères et plus votre mot de passe est long, plus il est sécurisé."
                            : locale === "es"
                            ? "Cuantos más tipos de caracteres utilices y más larga sea tu contraseña, más segura será."
                            : locale === "de"
                            ? "Je mehr Zeichentypen Sie verwenden und je länger Ihr Passwort ist, desto sicherer ist es."
                            : locale === "zh"
                            ? "您使用的字符类型越多，密码越长，密码就越安全。"
                            : "The more character types you use and the longer your password is, the more secure it will be."
                        }
                      >
                        <Button isIconOnly size="sm" variant="light" className={compact ? "min-w-5 w-5 h-5" : "min-w-6 w-6 h-6"}>
                          <BsInfoCircleFill className={`text-default-400 ${compact ? "text-xs" : "text-sm"}`} />
                        </Button>
                      </Tooltip>
                    </div>
                    <Chip size="sm" color={getStrengthInfo().color} variant="flat" className={compact ? "text-xs h-5" : ""}>
                      {getStrengthInfo().label}
                    </Chip>
                  </div>
                  <Progress
                    size={compact ? "sm" : "md"}
                    aria-label="Password strength"
                    classNames={{
                      indicator: `${entropy <= 35 ? "bg-danger" : ""} ${entropy > 35 && entropy <= 59 ? "bg-warning" : ""} ${
                        entropy > 59 && entropy < 120 ? "bg-success" : ""
                      } ${entropy >= 120 ? "bg-primary" : ""}`,
                    }}
                    value={entropy}
                    maxValue={120}
                    minValue={0}
                    showValueLabel={false}
                  />
                </div>
              )}
            </div>
          </div>
        </Tab>

        <Tab
          key="2fa"
          title={
            compact ? (
              <Tooltip content={TRAD.two_factor_auth[locale]}>
                <div className="flex items-center">
                  <MdFingerprint className="text-base" />
                </div>
              </Tooltip>
            ) : (
              <div className="flex items-center gap-2">
                <MdFingerprint className="text-lg" />
                <span>{TRAD.two_factor_auth[locale]}</span>
              </div>
            )
          }
        >
          <div className={compact ? "py-2 space-y-3" : "py-4 space-y-5"}>
            {!compact && (
              <div className={`flex items-start gap-2 text-default-600 ${compact ? "text-xs" : "text-sm"}`}>
                <FaInfoCircle className="mt-0.5 shrink-0 text-default-400" />
                <p>{TRAD.totp_explanation[locale]}</p>
              </div>
            )}

            {compact && (
              <Tooltip content={TRAD.totp_explanation[locale]} className="max-w-xs">
                <div className="flex items-center gap-2 text-default-600 text-xs cursor-help">
                  <FaInfoCircle className="text-default-400" />
                </div>
              </Tooltip>
            )}

            <div className="flex items-center gap-2">
              <Switch isSelected={totpEnabled} onValueChange={setTotpEnabled} color="primary">
                <span className="text-medium">{TRAD.two_factor_auth[locale]}</span>
              </Switch>
            </div>

            {totpEnabled && (
              <div className={compact ? "space-y-3" : "space-y-5"}>
                <Input
                  label={TRAD.otp[locale]}
                  placeholder={TRAD.enter_totp_secret[locale]}
                  value={editedData.totpSecret || ""}
                  onValueChange={updateTotpSecret}
                  color={isInvalidTotpSecret ? "danger" : "default"}
                  variant="flat"
                  size={compact ? "sm" : "md"}
                  description={isInvalidTotpSecret ? TRAD.invalid_totp_secret[locale] : ""}
                />

                {editedData.totpSecret && !isInvalidTotpSecret && otp && (
                  <div className={compact ? "py-1" : "py-2"}>
                    <div className={`flex flex-col ${compact ? "gap-1" : "gap-2"}`}>
                      <div className="flex justify-between items-center">
                        <span className={`text-default-600 ${compact ? "text-xs" : "text-sm"}`}>{TRAD.otp[locale]}</span>
                        {otpProgress !== null && <div className="text-xs text-default-500">{30 - Math.floor(otpProgress / 3.333)}s</div>}
                      </div>
                      <div className="flex justify-center items-center relative">
                        <div className={`font-mono tracking-wider ${compact ? "text-lg" : "text-2xl"}`}>{otp ? otp.match(/.{1,3}/g)?.join(" ") || otp : ""}</div>
                        <Tooltip content={TRAD.copy[locale]}>
                          <button
                            className={`p-1 rounded-md hover:bg-default-200 transition-colors ${compact ? "ml-1" : "ml-2"}`}
                            onClick={() => {
                              if (otp) {
                                navigator.clipboard.writeText(otp);
                                setOtpCopied(true);
                                setTimeout(() => setOtpCopied(false), 3000);
                              }
                            }}
                          >
                            <FaRegCopy className={`cursor-pointer ${compact ? "text-sm" : ""}`} />
                          </button>
                        </Tooltip>
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
                      <Progress aria-label="OTP Timer" size={compact ? "sm" : "md"} value={100 - otpProgress} color="secondary" showValueLabel={false} />
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
            compact ? (
              <Tooltip content={TRAD.secure_notes[locale]}>
                <div className="flex items-center">
                  <BsTextLeft className="text-base" />
                </div>
              </Tooltip>
            ) : (
              <div className="flex items-center gap-2">
                <BsTextLeft className="text-lg" />
                <span>{TRAD.secure_notes[locale]}</span>
              </div>
            )
          }
        >
          <div className={compact ? "py-2 space-y-2" : "py-4 space-y-4"}>
            {!compact && (
              <div className={`flex items-start gap-2 text-default-600 ${compact ? "text-xs" : "text-sm"}`}>
                <FaInfoCircle className="mt-0.5 shrink-0 text-default-400" />
                <p>{TRAD.secure_notes_explanation[locale]}</p>
              </div>
            )}

            {compact && (
              <Tooltip content={TRAD.secure_notes_explanation[locale]} className="max-w-xs">
                <div className="flex items-center gap-2 text-default-600 text-xs cursor-help">
                  <FaInfoCircle className="text-default-400" />
                </div>
              </Tooltip>
            )}

            <div className={compact ? "space-y-1" : "space-y-2"}>
              <div className="flex items-center justify-between">
                <label className={`block ${compact ? "text-sm" : "text-medium"}`} htmlFor="secureNotes">
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
                minRows={compact ? 3 : 4}
                variant="flat"
                size={compact ? "sm" : "md"}
                classNames={{
                  input: `${!showSecureNotes ? "blur-xs font-mono" : "font-mono"}`,
                  base: "w-full",
                }}
              />

              {(editedData.secureNotes?.length || 0) > 0 && <div className="text-xs text-right text-default-500">{editedData.secureNotes?.length}/1000</div>}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AppPasswordEdit;
