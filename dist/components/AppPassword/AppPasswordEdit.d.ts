import { PasswordDataType } from "./translations";
import { PasswordConfig } from "../PasswordGenerator";
interface AppPasswordEditProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    onSave: (data: PasswordDataType) => void;
    onCancel: () => void;
    onGeneratorConfig?: () => void;
    passwordConfig?: PasswordConfig;
}
export declare const AppPasswordEdit: React.FC<AppPasswordEditProps>;
export default AppPasswordEdit;
