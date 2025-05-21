import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { ReactElement, ReactNode } from 'react';
import { AvatarProps } from '@heroui/react';

type ConfirmModalContextType = {
    show: (props: {
        header: string | ReactElement;
        customContent?: ReactElement;
        alert: string;
        alertDescription?: string;
        cancelText?: string;
        acceptText?: string;
        cancelIcon?: ReactElement;
        acceptIcon?: ReactElement;
        color?: "default" | "success" | "warning" | "danger" | "primary" | "secondary" | "info";
    }) => Promise<boolean>;
};
declare function ConfirmModalContextProvider({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare const useConfirmModal: () => ConfirmModalContextType;

type ModalContextType = {
    show: (props: {
        title: string;
        message: string | ReactElement;
        className?: string;
        acceptText?: string;
        declineText?: string;
        validationMessage?: string;
        placeholder?: string;
        type?: "password" | "confirm" | "validate" | "info";
        customContent?: ReactElement;
    }) => Promise<string>;
};
declare function InputModalContextProvider(props: any): react_jsx_runtime.JSX.Element;
declare const useInputModalContext: () => ModalContextType;

declare enum SortType {
    ASCENDING = 0,
    DESCENDING = 1
}
declare enum ColumnType {
    STRING = 0,
    EDIT_TEXT = 1,
    BUTTON = 2,
    CUSTOM = 3,
    CHECKBOX = 4,
    SWITCH = 5,
    TEXT = 6,
    DROPDOWN = 7
}
type TableColumn = {
    type: ColumnType;
    name: string;
    sort: boolean;
    jsonFieldName?: string;
    maxLines?: number;
    inputType?: string;
};
type RowItem = {
    colIndex: number;
    title?: string;
    value?: string | boolean | number;
    onClick?: () => void;
    onChange?: (value: boolean | string | number) => void;
    children?: ReactElement;
    disabled?: boolean;
    items?: string[];
    id?: string;
};
type TableRow = {
    items: RowItem[];
    rowId?: string;
    id: string;
    selectable?: boolean;
    onUpdate?: (json: {}) => Promise<any>;
    inactive?: boolean;
    warning?: boolean;
    danger?: boolean;
    onConfigureClicked?: () => void;
    clickable?: boolean;
    onClick?: () => void;
};
interface TableProps {
    cols: TableColumn[];
    rows: TableRow[];
    setSelectedRows?: (ids: string[]) => void;
    refresh?: () => void;
    configureButton?: boolean;
    selectable?: boolean;
    dataTest?: string;
    blur?: boolean;
    unselectAll?: boolean;
    emptyTableContent?: ReactNode;
    showLines?: boolean;
}
declare const Table: React$1.FC<TableProps>;

interface TextIconProps extends Omit<AvatarProps, "backgroundColor"> {
    text?: string;
    backgroundColor?: string;
    className?: string;
}
declare const TextIcon: React.FC<TextIconProps>;

interface QrCodeElementProps extends React.HTMLAttributes<HTMLCanvasElement> {
    text: string;
    className?: string;
}
declare const QrCodeElement: React.FC<QrCodeElementProps>;

interface WindowScreenProps {
    children: ReactElement;
    icon?: string;
    title?: string;
    size?: "sm" | "md" | "lg" | "xl";
}
declare const WindowScreen: React.FC<WindowScreenProps>;

interface NavButtonProps {
    title: string;
    current: boolean;
    onClick?: () => void;
}
declare const NavButton: React.FC<NavButtonProps>;

interface NavBarProps {
    children: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
}
declare const NavBar: React$1.FC<NavBarProps>;

interface SearchBarProps {
    onKeyUp?: Function;
    onClick?: Function;
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    defaultHide?: boolean;
    children?: ReactNode;
    closeOnSelect?: boolean;
    props?: {
        [key: string]: string;
    };
}
declare const SearchBar: React.FC<SearchBarProps>;

interface InputPasswordProps {
    label: string;
    description?: string;
    onChange?: (value: string) => void;
    valid?: boolean;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    copyToClipboard?: boolean;
    color?: string;
    testId?: string;
}
declare const InputPassword: React.FC<InputPasswordProps>;

interface LoaderProps {
    message: string;
    img: string;
}
declare const Loader: React.FC<LoaderProps>;

interface SelectLanguageProps {
    languages: string[];
    onLanguageClicked: (language: string) => void;
    currentValue: string;
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}
declare const SelectLanguage: React.FC<SelectLanguageProps>;

declare enum PasswordType {
    PASSWORD = 0,
    PASSPHRASE = 1
}
type PasswordConfig = {
    length: number;
    numbers: boolean;
    capitalLetters: boolean;
    lowercaseLetters: boolean;
    specialCharacters: boolean;
};
type PassphraseConfig = {
    wordNumber: number;
    language: Locale;
};
type Locale = "fr" | "en";
interface PasswordGeneratorProps {
    passwordType?: PasswordType;
    passwordConfig?: PasswordConfig;
    passphraseConfig?: PassphraseConfig;
    locale?: Locale;
    onConfigChanged: (config: {
        passwordType: PasswordType;
        passwordConfig: PasswordConfig;
        passphraseConfig: PassphraseConfig;
    }) => void;
}
declare const PasswordGenerator: React.FC<PasswordGeneratorProps>;

export { ColumnType, ConfirmModalContextProvider, InputModalContextProvider, InputPassword, type InputPasswordProps, Loader, type LoaderProps, type Locale, NavBar, type NavBarProps, NavButton, type NavButtonProps, type PassphraseConfig, type PasswordConfig, PasswordGenerator, type PasswordGeneratorProps, PasswordType, QrCodeElement, type QrCodeElementProps, type RowItem, SearchBar, type SearchBarProps, SelectLanguage, type SelectLanguageProps, SortType, Table, type TableColumn, type TableProps, type TableRow, TextIcon, type TextIconProps, WindowScreen, type WindowScreenProps, useConfirmModal, useInputModalContext };
