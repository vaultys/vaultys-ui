export interface PasswordDataType {
  username?: string;
  password?: string;
  totpSecret?: string;
  secureNotes?: string;
}

type TranslationKeys =
  | "credentials"
  | "username"
  | "password"
  | "otp"
  | "copy"
  | "secure_notes"
  | "no_credentials"
  | "invalid_totp_secret"
  | "edit"
  | "save"
  | "cancel"
  | "two_factor_auth"
  | "show"
  | "hide"
  | "enter_username"
  | "enter_password"
  | "enter_totp_secret"
  | "enter_secure_notes"
  | "totp_explanation"
  | "secure_notes_explanation"
  | "has_changes"
  | "unsaved_changes_title"
  | "unsaved_changes_message"
  | "unsaved_changes_description"
  | "discard"
  | "configure_generator";

type LanguageCodes = "fr" | "en" | "es" | "de" | "zh";

type TranslationType = {
  [key in TranslationKeys]?: {
    [lang in LanguageCodes]: string;
  };
};

export const TRAD = {
  credentials: {
    fr: "Identifiants",
    en: "Credentials",
    es: "Credenciales",
    de: "Anmeldeinformationen",
    zh: "凭据",
  },
  username: {
    fr: "Nom d'utilisateur",
    en: "Username",
    es: "Nombre de usuario",
    de: "Benutzername",
    zh: "用户名",
  },
  password: {
    fr: "Mot de passe",
    en: "Password",
    es: "Contraseña",
    de: "Passwort",
    zh: "密码",
  },
  otp: {
    fr: "Code OTP",
    en: "OTP Code",
    es: "Código OTP",
    de: "OTP-Code",
    zh: "一次性密码",
  },
  copy: {
    fr: "Copier",
    en: "Copy",
    es: "Copiar",
    de: "Kopieren",
    zh: "复制",
  },
  secure_notes: {
    fr: "Notes sécurisées",
    en: "Secure Notes",
    es: "Notas seguras",
    de: "Sichere Notizen",
    zh: "安全笔记",
  },
  no_credentials: {
    fr: "Aucune donnée d'identification disponible",
    en: "No credential data available",
    es: "No hay datos de credenciales disponibles",
    de: "Keine Anmeldedaten verfügbar",
    zh: "没有可用的凭据数据",
  },
  invalid_totp_secret: {
    fr: "Le secret TOTP est invalide. Il doit contenir exactement 16 caractères.",
    en: "TOTP secret is invalid. It must contain exactly 16 characters.",
    es: "El secreto TOTP no es válido. Debe contener exactamente 16 caracteres.",
    de: "Das TOTP-Geheimnis ist ungültig. Es muss genau 16 Zeichen enthalten.",
    zh: "TOTP 密钥无效。它必须包含恰好 16 个字符。",
  },
  edit: {
    fr: "Modifier",
    en: "Edit",
    es: "Editar",
    de: "Bearbeiten",
    zh: "编辑",
  },
  save: {
    fr: "Enregistrer",
    en: "Save",
    es: "Guardar",
    de: "Speichern",
    zh: "保存",
  },
  cancel: {
    fr: "Annuler",
    en: "Cancel",
    es: "Cancelar",
    de: "Abbrechen",
    zh: "取消",
  },
  two_factor_auth: {
    fr: "Authentification à deux facteurs",
    en: "Two-Factor Authentication",
    es: "Autenticación de dos factores",
    de: "Zwei-Faktor-Authentifizierung",
    zh: "双因素认证",
  },
  show: {
    fr: "Afficher",
    en: "Show",
    es: "Mostrar",
    de: "Anzeigen",
    zh: "显示",
  },
  hide: {
    fr: "Masquer",
    en: "Hide",
    es: "Ocultar",
    de: "Ausblenden",
    zh: "隐藏",
  },
  enter_username: {
    fr: "Entrez votre nom d'utilisateur ou adresse email",
    en: "Enter your username or email",
    es: "Ingrese su nombre de usuario o correo electrónico",
    de: "Geben Sie Ihren Benutzernamen oder Ihre E-Mail ein",
    zh: "输入您的用户名或电子邮箱",
  },
  enter_password: {
    fr: "Entrez votre mot de passe",
    en: "Enter your password",
    es: "Ingrese su contraseña",
    de: "Geben Sie Ihr Passwort ein",
    zh: "输入您的密码",
  },
  enter_totp_secret: {
    fr: "Entrez la clé secrète TOTP",
    en: "Enter TOTP secret key",
    es: "Ingrese la clave secreta TOTP",
    de: "Geben Sie den TOTP-Geheimschlüssel ein",
    zh: "输入 TOTP 密钥",
  },
  enter_secure_notes: {
    fr: "Entrez des informations sensibles (max 1000 caractères)",
    en: "Enter sensitive information (max 1000 characters)",
    es: "Ingrese información sensible (máx. 1000 caracteres)",
    de: "Geben Sie sensible Informationen ein (max. 1000 Zeichen)",
    zh: "输入敏感信息（最多1000字符）",
  },
  totp_explanation: {
    fr: "L'authentification à deux facteurs (2FA) améliore la sécurité de votre compte en ajoutant une couche de protection supplémentaire. Avec TOTP, vous pouvez remplacer Google Authenticator ou Microsoft Authenticator, et l'extension SmartLink peut automatiquement remplir les codes OTP dans les formulaires pour vous.",
    en: "Two-factor authentication (2FA) enhances your account security by adding an extra layer of protection. With TOTP, you can replace Google Authenticator or Microsoft Authenticator, and the SmartLink extension can automatically fill OTP codes in forms for you.",
    es: "La autenticación de dos factores (2FA) mejora la seguridad de su cuenta al agregar una capa adicional de protección. Con TOTP, puede reemplazar Google Authenticator o Microsoft Authenticator, y la extensión SmartLink puede completar automáticamente los códigos OTP en los formularios.",
    de: "Zwei-Faktor-Authentifizierung (2FA) verbessert die Sicherheit Ihres Kontos durch eine zusätzliche Schutzschicht. Mit TOTP können Sie Google Authenticator oder Microsoft Authenticator ersetzen, und die SmartLink-Erweiterung kann automatisch OTP-Codes in Formularen für Sie ausfüllen.",
    zh: "双因素认证（2FA）通过添加额外的保护层来增强您的账户安全性。使用 TOTP，您可以替代 Google Authenticator 或 Microsoft Authenticator，而 SmartLink 扩展可以自动为您在表单中填写 OTP 代码。",
  },
  secure_notes_explanation: {
    fr: "Les notes sécurisées vous permettent de stocker en toute sécurité des informations sensibles comme des clés API, des tokens de récupération, ou toute autre information confidentielle que vous souhaitez garder protégée.",
    en: "Secure notes allow you to safely store sensitive information such as API keys, recovery tokens, or any other confidential information you want to keep protected.",
    es: "Las notas seguras le permiten almacenar de forma segura información sensible como claves API, tokens de recuperación o cualquier otra información confidencial que desee mantener protegida.",
    de: "Sichere Notizen ermöglichen es Ihnen, sensible Informationen wie API-Schlüssel, Wiederherstellungs-Tokens oder andere vertrauliche Informationen sicher zu speichern.",
    zh: "安全笔记使您能够安全地存储敏感信息，如 API 密钥、恢复令牌或任何其他您想要保护的机密信息。",
  },
  has_changes: {
    fr: "Vous avez des modifications non enregistrées",
    en: "You have unsaved changes",
    es: "Tiene cambios sin guardar",
    de: "Sie haben ungespeicherte Änderungen",
    zh: "您有未保存的更改",
  },
  unsaved_changes_title: {
    fr: "Modifications non enregistrées",
    en: "Unsaved Changes",
    es: "Cambios sin guardar",
    de: "Nicht gespeicherte Änderungen",
    zh: "未保存的更改",
  },
  unsaved_changes_message: {
    fr: "Vous avez des modifications non enregistrées",
    en: "You have unsaved changes",
    es: "Tiene cambios sin guardar",
    de: "Sie haben ungespeicherte Änderungen",
    zh: "您有未保存的更改",
  },
  unsaved_changes_description: {
    fr: "Si vous continuez, toutes vos modifications seront perdues. Voulez-vous vraiment quitter sans enregistrer ?",
    en: "If you continue, all your changes will be lost. Do you really want to leave without saving?",
    es: "Si continúa, se perderán todos sus cambios. ¿Realmente desea salir sin guardar?",
    de: "Wenn Sie fortfahren, gehen alle Ihre Änderungen verloren. Möchten Sie wirklich ohne Speichern fortfahren?",
    zh: "如果您继续，所有更改都将丢失。您确定要离开而不保存吗？",
  },
  discard: {
    fr: "Abandonner",
    en: "Discard",
    es: "Descartar",
    de: "Verwerfen",
    zh: "放弃",
  },
  configure_generator: {
    fr: "Configurer le générateur de mot de passe",
    en: "Configure password generator",
    es: "Configurar generador de contraseñas",
    de: "Passwortgenerator konfigurieren",
    zh: "配置密码生成器",
  },
};
