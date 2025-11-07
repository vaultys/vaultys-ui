import { PasswordDataType } from "../AppPassword/translations";
import { PasswordConfig } from "../PasswordGenerator";
export interface FolderPassword {
    folder: string;
    password?: PasswordDataType;
}
export interface ManagePasswordsProps {
    personalPassword?: PasswordDataType;
    folderPasswords?: FolderPassword[];
    locale?: "fr" | "en" | "es" | "de" | "zh";
    onUpdate?: (folder: string | "personal", data: PasswordDataType) => void;
    onGeneratorConfig?: () => void;
    readonly?: boolean;
    admin?: boolean;
    passwordConfig?: PasswordConfig;
}
export declare const ManagePasswords: React.FC<ManagePasswordsProps>;
export default ManagePasswords;
