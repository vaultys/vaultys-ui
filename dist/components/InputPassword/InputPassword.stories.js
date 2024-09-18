import { InputPassword } from ".";
const meta = {
    title: "",
    component: InputPassword,
};
export default meta;
export const Primary = {
    args: {
        label: "Label",
        description: "This is a test input password",
        valid: true,
        placeholder: "Enter you password",
        disabled: false,
        copyToClipboard: false,
        color: "bg-white dark:bg-slate-800",
    },
};
