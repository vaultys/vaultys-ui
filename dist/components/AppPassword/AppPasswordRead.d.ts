import { PasswordDataType } from "./translations";
interface AppPasswordReadProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    onEdit: () => void;
    onDelete?: () => void;
    readonly?: boolean;
    compact?: boolean;
    onUsernameCopied?: () => void;
    onPasswordCopied?: () => void;
    onTotpCopied?: () => void;
}
export declare const AppPasswordRead: React.FC<AppPasswordReadProps>;
export default AppPasswordRead;
