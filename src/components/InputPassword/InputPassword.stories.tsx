import { Meta, StoryObj } from "@storybook/react";
import { InputPassword } from ".";
const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
};
export default meta;
type Story = StoryObj<typeof InputPassword>;
export const Primary: Story = {
  args: {
    label: "Label",
    valid: true,
    placeholder: "Enter you password",
    disabled: false,
    copyToClipboard: false,
  },
};
