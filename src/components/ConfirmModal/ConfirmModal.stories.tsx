import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ConfirmModalContextProvider, useConfirmModal } from "./index";
import { Button } from "@heroui/react";

// Meta information for the component
const meta: Meta = {
  title: "Components/ConfirmModal",
  component: ConfirmModalContextProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to trigger the modal in stories
const ModalTrigger: React.FC<{
  header: string | React.ReactElement;
  customContent?: React.ReactElement;
  alert: string;
  alertDescription?: string;
  cancelText?: string;
  acceptText?: string;
  color?: "default" | "success" | "warning" | "danger" | "primary" | "secondary" | "info";
  buttonText: string;
}> = ({ header, customContent, alert, alertDescription, cancelText, acceptText, color, buttonText }) => {
  const { show } = useConfirmModal();

  const handleClick = async () => {
    const confirmed = await show({
      header,
      customContent,
      alert,
      alertDescription,
      cancelText,
      acceptText,
      color,
    });
    console.log("User confirmed:", confirmed);
  };

  return <Button onClick={handleClick}>{buttonText}</Button>;
};

// Base story template
export const Default: Story = {
  render: () => (
    <ConfirmModalContextProvider>
      <ModalTrigger header="Confirm Action" alert="Are you sure you want to proceed?" buttonText="Show Default Modal" />
    </ConfirmModalContextProvider>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <ConfirmModalContextProvider>
      <ModalTrigger
        header="Delete Item"
        alert="Are you sure you want to delete this item?"
        alertDescription="This action cannot be undone."
        buttonText="Show Modal with Description"
      />
    </ConfirmModalContextProvider>
  ),
};

export const DangerModal: Story = {
  render: () => (
    <ConfirmModalContextProvider>
      <ModalTrigger
        header="Delete Account"
        alert="Warning: You are about to delete your account"
        alertDescription="All your data will be permanently removed. This action cannot be undone."
        color="danger"
        acceptText="Delete Account"
        buttonText="Show Danger Modal"
      />
    </ConfirmModalContextProvider>
  ),
};

export const SuccessModal: Story = {
  render: () => (
    <ConfirmModalContextProvider>
      <ModalTrigger
        header="Confirm Publish"
        alert="Your document is ready to be published"
        alertDescription="Once published, it will be visible to all users."
        color="success"
        acceptText="Publish"
        buttonText="Show Success Modal"
      />
    </ConfirmModalContextProvider>
  ),
};

export const WithCustomContent: Story = {
  render: () => {
    const CustomContent = () => (
      <div className="p-4 bg-gray-100 rounded">
        <h4 className="text-lg font-semibold">Custom Form Content</h4>
        <p className="my-2">This is an example of custom content inside the modal.</p>
        <div className="mt-2 p-2 bg-white rounded">You can add any React components here.</div>
      </div>
    );

    return (
      <ConfirmModalContextProvider>
        <ModalTrigger
          header="Modal with Custom Content"
          customContent={<CustomContent />}
          alert="Please confirm after reviewing the details above"
          buttonText="Show Modal with Custom Content"
        />
      </ConfirmModalContextProvider>
    );
  },
};

export const MultipleModals: Story = {
  render: () => (
    <ConfirmModalContextProvider>
      <div className="flex flex-wrap gap-2">
        <ModalTrigger header="Information" alert="This is an informational message" color="info" buttonText="Info Modal" />
        <ModalTrigger header="Warning" alert="This is a warning message" color="warning" buttonText="Warning Modal" />
        <ModalTrigger header="Secondary Action" alert="Confirm this secondary action" color="secondary" buttonText="Secondary Modal" />
      </div>
    </ConfirmModalContextProvider>
  ),
};
