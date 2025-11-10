import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppPassword } from ".";
const meta = {
    title: "Components/AppPassword",
    component: AppPassword,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (_jsx("div", { style: { width: "600px" }, children: _jsx(Story, {}) })),
    ],
    argTypes: {
        locale: {
            control: "select",
            options: ["fr", "en", "es", "de", "zh"],
            defaultValue: "fr",
            description: "Langue d'affichage du composant",
        },
        passwordData: {
            description: "Données du mot de passe à afficher",
        },
        readonly: {
            control: "boolean",
            description: "Mode lecture seule pour le composant",
            defaultValue: false,
        },
        compact: {
            control: "boolean",
            description: "Mode compact pour les espaces réduits",
            defaultValue: false,
        },
    },
};
export default meta;
// Histoire principale avec des valeurs par défaut
export const Primary = {
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            password: "MotDePasse123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Ceci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\n",
        },
        onGeneratorConfig: () => {
            alert("Configurer le générateur de mot de passe");
        },
    },
};
// Variante en anglais
export const English = {
    args: {
        locale: "en",
        passwordData: {
            username: "user@example.com",
            password: "Password123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "This is a secure note",
        },
    },
};
// Variante en espagnol
export const Spanish = {
    args: {
        locale: "es",
        passwordData: {
            username: "usuario@ejemplo.com",
            password: "Contraseña123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Esta es una nota segura",
        },
    },
};
// Variante en allemand
export const German = {
    args: {
        locale: "de",
        passwordData: {
            username: "benutzer@beispiel.de",
            password: "Passwort123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Dies ist eine sichere Notiz",
        },
    },
};
// Variante en chinois
export const Chinese = {
    args: {
        locale: "zh",
        passwordData: {
            username: "用户@example.com",
            password: "密码123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "这是一个安全的笔记",
        },
    },
};
// Variante sans nom d'utilisateur
export const WithoutUsername = {
    args: {
        locale: "fr",
        passwordData: {
            password: "MotDePasse123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Ceci est une note sécurisée",
        },
    },
};
// Variante sans mot de passe
export const WithoutPassword = {
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Ceci est une note sécurisée",
        },
    },
};
// Variante avec notes courtes (pas de bouton d'expansion)
export const ShortSecureNotes = {
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            password: "MotDePasse123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Note courte",
        },
    },
};
// readonly variante
export const ReadOnly = {
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            password: "MotDePasse123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Note courte",
        },
        readonly: true,
    },
};
// Variante avec un secret TOTP invalide
export const InvalidTotpSecret = {
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            password: "MotDePasse123!",
            totpSecret: "INVALIDE", // Moins de 16 caractères
            secureNotes: "Ceci est une note sécurisée",
        },
    },
};
// Variante avec des données vides
export const EmptyData = {
    args: {
        locale: "fr",
        passwordData: {},
    },
};
// Mode compact - Vue par défaut
export const Compact = {
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            password: "MotDePasse123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Ceci est une note sécurisée pour tester le mode compact",
        },
        compact: true,
        onGeneratorConfig: () => {
            alert("Configurer le générateur de mot de passe");
        },
    },
    decorators: [
        (Story) => (_jsx("div", { style: { width: "400px" }, children: _jsx(Story, {}) })),
    ],
};
// Mode compact - Readonly
export const CompactReadOnly = {
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            password: "MotDePasse123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Ceci est une note sécurisée",
        },
        compact: true,
        readonly: true,
    },
    decorators: [
        (Story) => (_jsx("div", { style: { width: "400px" }, children: _jsx(Story, {}) })),
    ],
};
// Mode compact - Données minimales
export const CompactMinimal = {
    args: {
        locale: "fr",
        passwordData: {
            username: "user@example.com",
            password: "Pass123!",
        },
        compact: true,
    },
    decorators: [
        (Story) => (_jsx("div", { style: { width: "350px" }, children: _jsx(Story, {}) })),
    ],
};
// Mode compact - Toutes les langues
export const CompactEnglish = {
    args: {
        locale: "en",
        passwordData: {
            username: "user@example.com",
            password: "Password123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "This is a secure note in compact mode",
        },
        compact: true,
    },
    decorators: [
        (Story) => (_jsx("div", { style: { width: "400px" }, children: _jsx(Story, {}) })),
    ],
};
// Comparaison côte à côte : Normal vs Compact
export const NormalVsCompact = {
    render: (args) => (_jsxs("div", { style: { display: "flex", gap: "20px", alignItems: "flex-start" }, children: [_jsxs("div", { style: { width: "500px" }, children: [_jsx("h3", { style: { marginBottom: "10px" }, children: "Normal Mode" }), _jsx(AppPassword, Object.assign({}, args, { compact: false }))] }), _jsxs("div", { style: { width: "400px" }, children: [_jsx("h3", { style: { marginBottom: "10px" }, children: "Compact Mode" }), _jsx(AppPassword, Object.assign({}, args, { compact: true }))] })] })),
    args: {
        locale: "fr",
        passwordData: {
            username: "utilisateur@exemple.com",
            password: "MotDePasse123!",
            totpSecret: "JBSWY3DPEHPK3PXP",
            secureNotes: "Ceci est une note sécurisée pour comparer les deux modes d'affichage.",
        },
        onGeneratorConfig: () => {
            alert("Configurer le générateur de mot de passe");
        },
    },
    decorators: [],
    parameters: {
        layout: "padded",
    },
};
