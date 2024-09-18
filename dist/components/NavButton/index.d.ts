/// <reference types="react" />
export interface NavButtonProps {
    title: string;
    current: boolean;
    onClick?: () => void;
}
export declare const NavButton: React.FC<NavButtonProps>;
