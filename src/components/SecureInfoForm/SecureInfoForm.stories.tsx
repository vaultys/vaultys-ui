import { Meta, StoryObj } from "@storybook/react";
import { SecureInfoForm } from ".";
const meta: Meta<typeof SecureInfoForm> = {
  title: "",
  component: SecureInfoForm,
};
export default meta;
type Story = StoryObj<typeof SecureInfoForm>;
export const Primary: Story = {
  args: {},
};
