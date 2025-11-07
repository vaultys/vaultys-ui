import { PasswordDataType } from "./translations";
import { PasswordConfig } from "../PasswordGenerator";
interface AppPasswordProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    onUpdate?: (data: PasswordDataType) => void;
    readonly?: boolean;
    onGeneratorConfig?: () => void;
    passwordConfig?: PasswordConfig;
}
export declare const AppPassword: React.FC<AppPasswordProps>;
export default AppPassword;
