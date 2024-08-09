import { Meta, StoryObj } from "@storybook/react";
import { PasswordGenerator } from ".";
const meta: Meta<typeof PasswordGenerator> = {
  component: PasswordGenerator,
};
export default meta;
type Story = StoryObj<typeof PasswordGenerator>;
export const Primary: Story = {
  args: {
    onConfigChanged: () => {},
    locale: "fr",
  },
};
