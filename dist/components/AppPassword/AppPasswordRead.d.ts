import { PasswordDataType } from "./translations";
interface AppPasswordReadProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    onEdit: () => void;
    onDelete?: () => void;
    readonly?: boolean;
    compact?: boolean;
    onCopyUsername?: () => void;
    onCopyPassword?: () => void;
    onCopyOtp?: () => void;
}
export declare const AppPasswordRead: React.FC<AppPasswordReadProps>;
export default AppPasswordRead;
