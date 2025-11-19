export interface PasswordDataType {
    username?: string;
    password?: string;
    totpSecret?: string;
    secureNotes?: string;
}
export interface BasePasswordProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    compact?: boolean;
}
export declare const TRAD: {
    credentials: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    username: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    password: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    otp: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    copy: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    copied: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    secure_notes: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    no_credentials: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    invalid_totp_secret: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    edit: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    save: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    cancel: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    two_factor_auth: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    show: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    hide: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    enter_username: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    enter_password: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    enter_totp_secret: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    enter_secure_notes: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    totp_explanation: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    secure_notes_explanation: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    has_changes: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    unsaved_changes_title: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    unsaved_changes_message: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    unsaved_changes_description: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    discard: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    configure_generator: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
    generate_password: {
        fr: string;
        en: string;
        es: string;
        de: string;
        zh: string;
    };
};
