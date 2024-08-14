import React, { ReactNode } from "react";
export interface NavBarProps {
    children: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
}
export declare const NavBar: React.FC<NavBarProps>;
