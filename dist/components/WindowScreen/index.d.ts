import { ReactElement } from "react";
export interface WindowScreenProps {
    children: ReactElement;
    icon?: string;
    title?: string;
    size?: "sm" | "md" | "lg" | "xl";
}
export declare const WindowScreen: React.FC<WindowScreenProps>;
