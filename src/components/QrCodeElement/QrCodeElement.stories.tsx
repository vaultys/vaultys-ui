import { Meta, StoryObj } from "@storybook/nextjs";
import { QrCodeElement } from ".";
const meta: Meta<typeof QrCodeElement> = {
  component: QrCodeElement,
};
export default meta;
type Story = StoryObj<typeof QrCodeElement>;
export const Primary: Story = {
  args: {
    text: "https://wallet.vaultys.net",
    className: "",
  },
};
