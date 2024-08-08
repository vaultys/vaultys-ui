import { Meta, StoryObj } from "@storybook/react";
import "../../../dist/index.css";
import TextIcon from ".";

const meta: Meta<typeof TextIcon> = {
  component: TextIcon,
};

export default meta;
type Story = StoryObj<typeof TextIcon>;

export const Primary: Story = {
  args: {
    text: "hello world",
    backgroundColor: "#0000FF",
    className: "vui-w-32 vui-h-32 vui-rounded-full vui-shadow-lg",
  },
};
