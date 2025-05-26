"use client";
import { useState } from "react";
import AppPasswordRead from "./AppPasswordRead";
import AppPasswordEdit from "./AppPasswordEdit";
import { PasswordDataType } from "./translations";

interface AppPasswordProps {
  passwordData: PasswordDataType;
  locale: "fr" | "en" | "es" | "de" | "zh";
  onUpdate?: (data: PasswordDataType) => void;
}

export const AppPassword: React.FC<AppPasswordProps> = ({ passwordData, locale, onUpdate }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<PasswordDataType>(passwordData);

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
    setEditMode(false);
    // Restaurer les données originales
    setCurrentData(passwordData);
  };

  return (
    <>
      {editMode ? (
        <AppPasswordEdit passwordData={currentData} locale={locale} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <AppPasswordRead passwordData={currentData} locale={locale} onEdit={handleEdit} />
      )}
    </>
  );
};

export default AppPassword;
