import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from ".";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Taille de la barre de recherche",
    },
  },
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Primary: Story = {
  args: {
    defaultHide: false,
    className: "",
    placeholder: "Search",
    size: "md",
    children: (
      <div className="flex flex-col gap-1">
        <span>User 1</span>
        <span>User 2</span>
      </div>
    ),
  },
};

export const SizeXS: Story = {
  args: {
    ...Primary.args,
    size: "xs",
    placeholder: "XS Search",
  },
};

export const SizeSM: Story = {
  args: {
    ...Primary.args,
    size: "sm",
    placeholder: "SM Search",
  },
};

export const SizeMD: Story = {
  args: {
    ...Primary.args,
    size: "md",
    placeholder: "MD Search",
  },
};

export const SizeLG: Story = {
  args: {
    ...Primary.args,
    size: "lg",
    placeholder: "LG Search",
  },
};

export const SizeXL: Story = {
  args: {
    ...Primary.args,
    size: "xl",
    placeholder: "XL Search",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">XS Size</h3>
        <SearchBar size="xs" placeholder="XS Search" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">SM Size</h3>
        <SearchBar size="sm" placeholder="SM Search" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">MD Size (default)</h3>
        <SearchBar size="md" placeholder="MD Search" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">LG Size</h3>
        <SearchBar size="lg" placeholder="LG Search" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">XL Size</h3>
        <SearchBar size="xl" placeholder="XL Search" />
      </div>
    </div>
  ),
};
