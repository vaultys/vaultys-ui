import { Meta, StoryObj } from "@storybook/react";
import { QrCodeElement } from ".";
import "../../../dist/index.css";
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
