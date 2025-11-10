"use client";
import { useState, useEffect } from "react";
import AppPasswordRead from "./AppPasswordRead";
import AppPasswordEdit from "./AppPasswordEdit";
import { PasswordDataType } from "./translations";
import { AnimatePresence, motion } from "framer-motion";
import { PasswordConfig } from "../PasswordGenerator";

interface AppPasswordProps {
  passwordData: PasswordDataType;
  locale: "fr" | "en" | "es" | "de" | "zh";
  onUpdate?: (data: PasswordDataType) => void;
  readonly?: boolean;
  onGeneratorConfig?: () => void;
  passwordConfig?: PasswordConfig;
  compact?: boolean;
}

export const AppPassword: React.FC<AppPasswordProps> = ({ passwordData, locale, onUpdate, readonly = false, onGeneratorConfig, passwordConfig, compact = false }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<PasswordDataType>(passwordData);
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);

  // Mise à jour du state lorsque les props changent
  useEffect(() => {
    setCurrentData(passwordData);
  }, [passwordData]);

  // Vérifier si des modifications ont été apportées
  useEffect(() => {
    const hasChanges =
      currentData.username !== passwordData.username ||
      currentData.password !== passwordData.password ||
      currentData.totpSecret !== passwordData.totpSecret ||
      currentData.secureNotes !== passwordData.secureNotes;

    setIsDataChanged(hasChanges);
  }, [currentData, passwordData]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = (data: PasswordDataType) => {
    setCurrentData(data);
    setEditMode(false);
    if (onUpdate) {
      onUpdate(data);
    }
  };

  const handleCancel = () => {
    setCurrentData({ ...passwordData });
    setEditMode(false);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {editMode ? (
          <motion.div key="edit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <AppPasswordEdit
              passwordData={currentData}
              locale={locale}
              onSave={handleSave}
              onCancel={handleCancel}
              onGeneratorConfig={onGeneratorConfig}
              passwordConfig={passwordConfig}
              compact={compact}
            />
          </motion.div>
        ) : (
          <motion.div key="read" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <AppPasswordRead readonly={readonly} passwordData={currentData} locale={locale} onEdit={handleEdit} compact={compact} />
          </motion.div>
        )}
      </AnimatePresence>
      {isDataChanged && !editMode && (
        <div className="absolute top-2 right-2">
          <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse"></span>
        </div>
      )}
    </div>
  );
};

export default AppPassword;
