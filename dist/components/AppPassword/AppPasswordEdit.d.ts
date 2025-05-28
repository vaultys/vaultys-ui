import { PasswordDataType } from "./translations";
interface AppPasswordEditProps {
    passwordData: PasswordDataType;
    locale: "fr" | "en" | "es" | "de" | "zh";
    onSave: (data: PasswordDataType) => void;
    onCancel: () => void;
}
export declare const AppPasswordEdit: React.FC<AppPasswordEditProps>;
export default AppPasswordEdit;
