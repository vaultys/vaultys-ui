import { SelectLanguage } from ".";
const meta = {
    component: SelectLanguage,
};
export default meta;
export const Primary = {
    args: {
        languages: ["fr", "en", "zh", "sv", "pt", "gn"],
        currentValue: "zh",
        onLanguageClicked: (item) => console.log(item),
        size: "2xl",
    },
};
