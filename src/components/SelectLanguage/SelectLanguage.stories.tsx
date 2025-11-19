import { Meta, StoryObj } from "@storybook/nextjs";
import { SelectLanguage } from ".";
const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
};
export default meta;
type Story = StoryObj<typeof SelectLanguage>;
export const Primary: Story = {
  args: {
    languages: ["fr", "en", "zh", "sv", "pt", "gn"],
    currentValue: "zh",
    onLanguageClicked: (item) => console.log(item),
    size: "2xl",
  },
};
