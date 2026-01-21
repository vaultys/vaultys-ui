import type { Meta, StoryObj } from "@storybook/nextjs";
import { ManagePasswords } from "./index";
import { PasswordDataType } from "../AppPassword/translations";

const meta: Meta<typeof ManagePasswords> = {
  title: "Components/ManagePasswords",
  component: ManagePasswords,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    locale: {
      control: "select",
      options: ["fr", "en", "es", "de", "zh"],
      description: "Language locale",
      defaultValue: "en",
    },
    readonly: {
      control: "boolean",
      description: "Make the component read-only",
      defaultValue: false,
    },
    admin: {
      control: "boolean",
      description: "Admin mode - allows editing folder passwords",
      defaultValue: false,
    },
    allowPersonal: {
      control: "boolean",
      description: "Allow personal passwords",
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ManagePasswords>;

const examplePersonalPassword: PasswordDataType = {
  username: "john.doe@example.com",
  password: "MySecureP@ssw0rd!",
  totpSecret: "JBSWY3DPEHPK3PXP",
  secureNotes: "This is a secure note for my personal account.",
};

const exampleFolderPassword1: PasswordDataType = {
  username: "dev.frontend@company.com",
  password: "DevFront2024!",
  totpSecret: "JBSWY3DPEHPK3PXQ",
};

const exampleFolderPassword2: PasswordDataType = {
  username: "backend@company.com",
  password: "BackendSecure#2024",
};

export const PersonalOnly: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    locale: "en",
  },
};

export const PersonalOnlyEmpty: Story = {
  args: {
    personalPassword: {},
    locale: "en",
  },
};

export const WithFolders: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Dev/Backend",
        password: exampleFolderPassword2,
      },
      {
        folder: "/Marketing",
      },
    ],
    locale: "en",
  },
};

export const FoldersWithoutPersonal: Story = {
  args: {
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Dev/Backend",
        password: exampleFolderPassword2,
      },
      {
        folder: "/Production",
      },
    ],
    locale: "en",
  },
};

export const FoldersNoPassword: Story = {
  args: {
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
      },
      {
        folder: "/Dev/Backend",
      },
      {
        folder: "/Marketing",
      },
    ],
    locale: "en",
  },
};

export const MixedPasswordStates: Story = {
  args: {
    personalPassword: {},
    folderPasswords: [
      {
        folder: "/Production/App1",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Production/App2",
      },
      {
        folder: "/Staging",
        password: exampleFolderPassword2,
      },
    ],
    locale: "en",
  },
};

export const FrenchLocale: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Développement/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Développement/Backend",
        password: exampleFolderPassword2,
      },
    ],
    locale: "fr",
  },
};

export const ReadOnly: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Dev/Backend",
        password: exampleFolderPassword2,
      },
    ],
    locale: "en",
    readonly: true,
  },
};

export const WithCallbacks: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Dev/Backend",
        password: exampleFolderPassword2,
      },
    ],
    locale: "en",
    onUpdate: (folder, data) => {
      console.log(`Password updated for ${folder}:`, data);
      alert(`Password updated for ${folder}`);
    },
    onGeneratorConfig: () => {
      console.log("Generator config opened");
      alert("Generator configuration opened");
    },
  },
};

export const LongFolderPaths: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Organizations/MyCompany/Projects/WebApp/Development/Frontend",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Organizations/MyCompany/Projects/WebApp/Development/Backend",
        password: exampleFolderPassword2,
      },
      {
        folder: "/Organizations/MyCompany/Projects/MobileApp/Production",
      },
    ],
    locale: "en",
  },
};

export const SpanishLocale: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Desarrollo/Frontend",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Desarrollo/Backend",
        password: exampleFolderPassword2,
      },
    ],
    locale: "es",
  },
};

export const AdminMode: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Dev/Backend",
        password: exampleFolderPassword2,
      },
    ],
    locale: "en",
    admin: true,
  },
};

export const NonAdminMode: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Dev/Backend",
        password: exampleFolderPassword2,
      },
    ],
    locale: "es",
  },
};

export const NoPersonalAllowed: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    folderPasswords: [
      {
        folder: "/Dev/FrontEnd",
        password: exampleFolderPassword1,
      },
      {
        folder: "/Dev/Backend",
        password: exampleFolderPassword2,
      },
    ],
    locale: "en",
    allowPersonal: false,
  },
};

export const NoPersonalAllowedNoFolders: Story = {
  args: {
    personalPassword: examplePersonalPassword,
    locale: "en",
    allowPersonal: false,
  },
};
