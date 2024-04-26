import { Meta, StoryObj } from "@storybook/react";
import { WindowScreen } from ".";
const meta: Meta<typeof WindowScreen> = {
  component: WindowScreen,
};
export default meta;
type Story = StoryObj<typeof WindowScreen>;
export const Primary: Story = {
  args: {
    children: <span>Hello world</span>,
    icon: "https://media.licdn.com/dms/image/D4E0BAQHy1TJ0x5De5Q/company-logo_200_200/0/1707556507659/vaultys_logo?e=2147483647&v=beta&t=nqEHWWO8SwsaWEcbafMg9we4onV11UfY1Wz5uxzjr88",
    size: "lg",
    title: "SmartLink",
  },
};
