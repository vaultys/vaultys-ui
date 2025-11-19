import { SelectPassword } from ".";
const meta = {
    title: "Forms/SelectPassword",
    component: SelectPassword,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        locale: {
            control: "select",
            options: ["fr", "en"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        label: "Mot de passe",
        description: "Entrez un mot de passe sécurisé",
        onChange: (value) => console.log("Password changed:", value),
        locale: "fr",
    },
};
export const WithInitialPassword = {
    args: {
        label: "Mot de passe",
        description: "Modifiez votre mot de passe",
        password: "P@ssw0rd123!",
        onChange: (value) => console.log("Password changed:", value),
        locale: "fr",
    },
};
export const EnglishLanguage = {
    args: {
        label: "Password",
        description: "Enter a secure password",
        onChange: (value) => console.log("Password changed:", value),
        locale: "en",
    },
};
export const CustomPasswordConfig = {
    args: {
        label: "Mot de passe",
        description: "Mot de passe avec configuration personnalisée",
        onChange: (value) => console.log("Password changed:", value),
        passwordConfig: {
            length: 12,
            numbers: true,
            capitalLetters: true,
            lowercaseLetters: true,
            specialCharacters: false,
        },
        locale: "fr",
    },
};
export const ReadOnly = {
    args: {
        label: "Mot de passe (lecture seule)",
        password: "P@ssw0rd123!",
        locale: "fr",
    },
};
