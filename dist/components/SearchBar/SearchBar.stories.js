import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchBar } from ".";
const meta = {
    component: SearchBar,
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
            description: "Taille de la barre de recherche",
        },
    },
};
export default meta;
export const Primary = {
    args: {
        defaultHide: false,
        className: "",
        placeholder: "Search",
        size: "md",
        children: (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("span", { children: "User 1" }), _jsx("span", { children: "User 2" })] })),
    },
};
export const SizeXS = {
    args: Object.assign(Object.assign({}, Primary.args), { size: "xs", placeholder: "XS Search" }),
};
export const SizeSM = {
    args: Object.assign(Object.assign({}, Primary.args), { size: "sm", placeholder: "SM Search" }),
};
export const SizeMD = {
    args: Object.assign(Object.assign({}, Primary.args), { size: "md", placeholder: "MD Search" }),
};
export const SizeLG = {
    args: Object.assign(Object.assign({}, Primary.args), { size: "lg", placeholder: "LG Search" }),
};
export const SizeXL = {
    args: Object.assign(Object.assign({}, Primary.args), { size: "xl", placeholder: "XL Search" }),
};
export const AllSizes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium mb-2", children: "XS Size" }), _jsx(SearchBar, { size: "xs", placeholder: "XS Search" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium mb-2", children: "SM Size" }), _jsx(SearchBar, { size: "sm", placeholder: "SM Search" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium mb-2", children: "MD Size (default)" }), _jsx(SearchBar, { size: "md", placeholder: "MD Search" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium mb-2", children: "LG Size" }), _jsx(SearchBar, { size: "lg", placeholder: "LG Search" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium mb-2", children: "XL Size" }), _jsx(SearchBar, { size: "xl", placeholder: "XL Search" })] })] })),
};
