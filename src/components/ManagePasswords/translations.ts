type LanguageCodes = "fr" | "en" | "es" | "de" | "zh";

export const MANAGE_PASSWORDS_TRAD = {
  personal: {
    fr: "Personnel",
    en: "Personal",
    es: "Personal",
    de: "Persönlich",
    zh: "个人",
  },
  select_folder: {
    fr: "Sélectionnez un dossier",
    en: "Select a folder",
    es: "Seleccionar una carpeta",
    de: "Ordner auswählen",
    zh: "选择文件夹",
  },
  no_password: {
    fr: "Aucun mot de passe configuré",
    en: "No password configured",
    es: "Sin contraseña configurada",
    de: "Kein Passwort konfiguriert",
    zh: "未配置密码",
  },
  folder_readonly_info: {
    fr: "Vous pouvez consulter ce mot de passe mais seuls les administrateurs peuvent le modifier.",
    en: "You can view this password but only administrators can edit it.",
    es: "Puede ver esta contraseña, pero solo los administradores pueden editarla.",
    de: "Sie können dieses Passwort anzeigen, aber nur Administratoren können es bearbeiten.",
    zh: "您可以查看此密码，但只有管理员可以编辑它。",
  },
} as const;
