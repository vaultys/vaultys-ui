import { Meta, StoryObj } from "@storybook/react";
import { InputPassword } from ".";
const meta: Meta<typeof InputPassword> = {
  title: "",
  component: InputPassword,
};
export default meta;
type Story = StoryObj<typeof InputPassword>;
export const Primary: Story = {
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
