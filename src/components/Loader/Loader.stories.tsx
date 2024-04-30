import { Meta, StoryObj } from "@storybook/react";
import Loader from ".";
const meta: Meta<typeof Loader> = {
  component: Loader,
};
export default meta;
type Story = StoryObj<typeof Loader>;
export const Primary: Story = {
  args: {
    message: "Starting the application",
    img: "https://site.vaultys.com/hubfs/walletid-min.png",
  },
};
