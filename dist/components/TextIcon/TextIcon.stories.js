import TextIcon from "./index";
const meta = {
    title: "Components/TextIcon",
    component: TextIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
            defaultValue: "md",
            description: "Size of the text icon",
        },
        isBordered: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "Add border to the text icon",
        },
        backgroundColor: {
            control: { type: "color" },
            description: "Background color of the text icon",
        },
    },
};
export default meta;
// Default TextIcon
export const Default = {
    args: {
        text: "JD",
        size: "md",
        isBordered: false,
    },
};
// TextIcon with custom text
export const CustomText = {
    args: {
        text: "John Doe",
        size: "md",
    },
};
// TextIcon with custom background color
export const CustomBackground = {
    args: {
        text: "Custom",
        backgroundColor: "#6366F1",
        size: "md",
    },
};
// TextIcon with single name
export const SingleName = {
    args: {
        text: "Alexandra",
        size: "md",
    },
};
// TextIcon with multiple names
export const MultipleNames = {
    args: {
        text: "Jane Smith",
        size: "md",
    },
};
// TextIcon with different sizes
export const Small = {
    args: {
        text: "Small",
        size: "sm",
    },
};
export const Medium = {
    args: {
        text: "Medium",
        size: "md",
    },
};
export const Large = {
    args: {
        text: "Large",
        size: "lg",
    },
};
// TextIcon with border
export const Bordered = {
    args: {
        text: "Bordered",
        isBordered: true,
        size: "md",
    },
};
