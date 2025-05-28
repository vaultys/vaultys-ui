import { PasswordDataType } from "./translations";
interface AppPasswordReadProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    onEdit: () => void;
    readonly?: boolean;
}
export declare const AppPasswordRead: React.FC<AppPasswordReadProps>;
export default AppPasswordRead;
