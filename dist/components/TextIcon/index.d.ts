import { AvatarProps } from "@heroui/react";
export interface TextIconProps extends Omit<AvatarProps, "backgroundColor"> {
    text?: string;
    backgroundColor?: string;
    className?: string;
}
export declare const TextIcon: React.FC<TextIconProps>;
export default TextIcon;
