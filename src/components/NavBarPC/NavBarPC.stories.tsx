import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from ".";
import { NavButton } from "../NavButton";
const meta: Meta<typeof NavBar> = {
  component: NavBar,
};
export default meta;
type Story = StoryObj<typeof NavBar>;
export const Primary: Story = {
  args: {
    startContent: <span>SmartLink</span>,
    children: [<NavButton title="Home" current />, <NavButton title="Profile" current={false} />],
    endContent: <span>Logout</span>,
  },
};
