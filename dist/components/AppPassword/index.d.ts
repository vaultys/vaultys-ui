import { PasswordDataType } from "./translations";
interface AppPasswordProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    onUpdate?: (data: PasswordDataType) => void;
    readonly?: boolean;
}
export declare const AppPassword: React.FC<AppPasswordProps>;
export default AppPassword;
