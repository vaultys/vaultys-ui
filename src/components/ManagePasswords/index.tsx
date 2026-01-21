"use client";
import { useState, useEffect } from "react";
import { Button, Popover, PopoverTrigger, PopoverContent, Listbox, ListboxItem, Chip } from "@heroui/react";
import { BsFolderFill } from "@react-icons/all-files/bs/BsFolderFill";
import { BsPersonFill } from "@react-icons/all-files/bs/BsPersonFill";
import { BiKey } from "@react-icons/all-files/bi/BiKey";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { AppPassword } from "../AppPassword";
import { PasswordDataType } from "../AppPassword/translations";
import { MANAGE_PASSWORDS_TRAD } from "./translations";
import { PasswordConfig } from "../PasswordGenerator";

export interface FolderPassword {
  folder: string;
  password?: PasswordDataType;
}

export interface ManagePasswordsProps {
  personalPassword?: PasswordDataType;
  folderPasswords?: FolderPassword[];
  locale?: "fr" | "en" | "es" | "de" | "zh";
  onUpdate?: (folder: string | "personal", data: PasswordDataType) => void;
  onGeneratorConfig?: () => void;
  readonly?: boolean;
  admin?: boolean;
  passwordConfig?: PasswordConfig;
  compact?: boolean;
  allowPersonal?: boolean;
}

export const ManagePasswords: React.FC<ManagePasswordsProps> = ({
  personalPassword,
  folderPasswords = [],
  locale = "en",
  onUpdate,
  onGeneratorConfig,
  readonly = false,
  admin = false,
  passwordConfig,
  compact = false,
  allowPersonal = true,
}) => {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  // Déterminer le premier élément avec un mot de passe
  useEffect(() => {
    if (selectedKey) return;

    // Vérifier le mot de passe personnel d'abord (seulement si allowPersonal est true)
    if (allowPersonal && personalPassword && (personalPassword.username || personalPassword.password)) {
      setSelectedKey("personal");
      return;
    }

    // Chercher le premier dossier avec un mot de passe
    const firstFolderWithPassword = folderPasswords.find((fp) => fp.password && (fp.password.username || fp.password.password));

    if (firstFolderWithPassword) {
      setSelectedKey(firstFolderWithPassword.folder);
      return;
    }

    // Par défaut, sélectionner "personal" ou le premier dossier
    if (folderPasswords.length > 0) {
      setSelectedKey(folderPasswords[0].folder);
    } else if (allowPersonal) {
      setSelectedKey("personal");
    }
  }, [personalPassword, folderPasswords, selectedKey, allowPersonal]);

  // Déterminer si la sélection actuelle est en lecture seule
  // En mode non-admin, les dossiers sont en lecture seule
  const isCurrentReadonly = readonly || (!admin && selectedKey !== "personal");

  // S'il n'y a pas de dossiers et allowPersonal est true, afficher directement AppPassword
  if (folderPasswords.length === 0 && allowPersonal) {
    return (
      <AppPassword
        passwordConfig={passwordConfig}
        passwordData={personalPassword || {}}
        locale={locale}
        onUpdate={(data) => onUpdate?.("personal", data)}
        onGeneratorConfig={onGeneratorConfig}
        readonly={readonly}
        compact={compact}
      />
    );
  }

  // Si allowPersonal est false et qu'il n'y a pas de dossiers, ne rien afficher
  if (folderPasswords.length === 0 && !allowPersonal) {
    return (
      <Chip
        color="warning"
        variant="flat"
        startContent={<AiFillLock className={compact ? "w-3 h-3" : "w-4 h-4"} />}
        classNames={{ base: compact ? "p-2 h-auto" : "p-3 h-auto" }}
      >
        <span className={compact ? "text-xs text-wrap" : "text-sm text-wrap"}>{MANAGE_PASSWORDS_TRAD.personal_not_allowed[locale]}</span>
      </Chip>
    );
  }

  // Obtenir le mot de passe actuellement sélectionné
  const getCurrentPassword = (): PasswordDataType => {
    if (selectedKey === "personal") {
      return personalPassword || {};
    }
    const folder = folderPasswords.find((fp) => fp.folder === selectedKey);
    return folder?.password || {};
  };

  // Créer les options pour le Select
  const options = [
    ...(allowPersonal
      ? [
          {
            key: "personal",
            label: MANAGE_PASSWORDS_TRAD.personal[locale],
            icon: <BsPersonFill className="text-primary" />,
            hasPassword: !!(personalPassword && (personalPassword.username || personalPassword.password)),
          },
        ]
      : []),
    ...folderPasswords.map((fp) => ({
      key: fp.folder,
      label: fp.folder,
      icon: <BsFolderFill className="text-yellow-500" />,
      hasPassword: !!(fp.password && (fp.password.username || fp.password.password)),
    })),
  ];

  const handleUpdate = (data: PasswordDataType) => {
    onUpdate?.(selectedKey, data);
  };

  // Obtenir le label de l'option sélectionnée
  const getSelectedLabel = () => {
    const selected = options.find((opt) => opt.key === selectedKey);
    return selected?.label || MANAGE_PASSWORDS_TRAD.select_folder[locale];
  };

  return (
    <div className={`flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`}>
      {/* Message d'information si allowPersonal est false */}
      {!allowPersonal && (
        <Chip
          color="primary"
          variant="flat"
          startContent={<AiFillLock className={compact ? "w-3 h-3" : "w-4 h-4"} />}
          classNames={{ base: compact ? "p-2 h-auto" : "p-3 h-auto" }}
        >
          <span className={compact ? "text-xs text-wrap" : "text-sm text-wrap"}>{MANAGE_PASSWORDS_TRAD.personal_not_allowed[locale]}</span>
        </Chip>
      )}

      {/* Sélecteur de dossier */}
      <Popover placement="bottom-start" isOpen={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <Button
            data-test="app-password-folders-trigger"
            variant="flat"
            className={`justify-between ${compact ? "h-10" : "h-14"}`}
            size={compact ? "sm" : "md"}
            endContent={<BiChevronDown className={compact ? "w-3 h-3" : "w-4 h-4"} />}
          >
            <div className={`flex items-center ${compact ? "gap-1" : "gap-2"}`}>
              {selectedKey === "personal" ? (
                <BsPersonFill className={`text-primary ${compact ? "w-4 h-4" : "w-5 h-5"}`} />
              ) : (
                <BsFolderFill className={`text-yellow-500 ${compact ? "w-4 h-4" : "w-5 h-5"}`} />
              )}
              <span className={compact ? "text-sm" : ""}>{getSelectedLabel()}</span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-1">
          <Listbox
            aria-label={MANAGE_PASSWORDS_TRAD.select_folder[locale]}
            selectedKeys={selectedKey ? [selectedKey] : []}
            selectionMode="single"
            onSelectionChange={(keys) => {
              const selected = Array.from(keys)[0] as string;
              if (selected) {
                setSelectedKey(selected);
                setIsOpen(false);
              }
            }}
          >
            {options.map((option, index) => (
              <ListboxItem
                key={option.key}
                data-test={`app-password-folder-item-${index}`}
                startContent={option.icon}
                endContent={
                  option.hasPassword ? (
                    <Chip size="sm" color="success" variant="flat" startContent={<BiKey className="w-3 h-3" />}>
                      <span className="text-xs">Password</span>
                    </Chip>
                  ) : undefined
                }
              >
                {option.label}
              </ListboxItem>
            ))}
          </Listbox>
        </PopoverContent>
      </Popover>

      {/* Message d'information pour les non-admins regardant un dossier */}
      {!admin && selectedKey !== "personal" && (
        <Chip
          color="warning"
          variant="flat"
          startContent={<AiFillLock className={compact ? "w-3 h-3" : "w-4 h-4"} />}
          classNames={{ base: compact ? "p-2 h-auto" : "p-3 h-auto" }}
        >
          <span className={compact ? "text-xs text-wrap" : "text-sm text-wrap"}>{MANAGE_PASSWORDS_TRAD.folder_readonly_info[locale]}</span>
        </Chip>
      )}

      {/* Composant AppPassword */}
      <AppPassword
        key={selectedKey}
        passwordData={getCurrentPassword()}
        locale={locale}
        onUpdate={handleUpdate}
        onGeneratorConfig={onGeneratorConfig}
        passwordConfig={passwordConfig}
        readonly={isCurrentReadonly}
        compact={compact}
      />
    </div>
  );
};

export default ManagePasswords;
