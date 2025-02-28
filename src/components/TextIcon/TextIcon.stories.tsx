import type { Meta, StoryObj } from "@storybook/react";
import TextIcon from "./index";

const meta: Meta<typeof TextIcon> = {
  title: "Components/TextIcon",
  component: TextIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "Size of the text icon",
    },
    isBordered: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Add border to the text icon",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the text icon",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextIcon>;

// Default TextIcon
export const Default: Story = {
  args: {
    text: "JD",
    size: "md",
    isBordered: false,
  },
};

// TextIcon with custom text
export const CustomText: Story = {
  args: {
    text: "John Doe",
    size: "md",
  },
};

// TextIcon with custom background color
export const CustomBackground: Story = {
  args: {
    text: "Custom",
    backgroundColor: "#6366F1",
    size: "md",
  },
};

// TextIcon with single name
export const SingleName: Story = {
  args: {
    text: "Alexandra",
    size: "md",
  },
};

// TextIcon with multiple names
export const MultipleNames: Story = {
  args: {
    text: "Jane Smith",
    size: "md",
  },
};

// TextIcon with different sizes
export const Small: Story = {
  args: {
    text: "Small",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    text: "Medium",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    text: "Large",
    size: "lg",
  },
};

// TextIcon with border
export const Bordered: Story = {
  args: {
    text: "Bordered",
    isBordered: true,
    size: "md",
  },
};
