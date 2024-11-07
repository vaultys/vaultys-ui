import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from ".";
const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
};
export default meta;
type Story = StoryObj<typeof SearchBar>;
export const Primary: Story = {
  args: {
    defaultHide: false,
    className: "",
    placeholder: "Search",
    children: (
      <div className="flex flex-col gap-1">
        <span>User 1</span>
        <span>User 2</span>
      </div>
    ),
  },
};
