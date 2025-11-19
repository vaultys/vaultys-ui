import { Meta, StoryObj } from "@storybook/nextjs";
import { AppPassword } from ".";

const meta: Meta<typeof AppPassword> = {
  title: "Components/AppPassword",
  component: AppPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    locale: {
      control: "select",
      options: ["fr", "en", "es", "de", "zh"],
      defaultValue: "fr",
      description: "Langue d'affichage du composant",
    },
    passwordData: {
      description: "Données du mot de passe à afficher",
    },
    readonly: {
      control: "boolean",
      description: "Mode lecture seule pour le composant",
      defaultValue: false,
    },
    compact: {
      control: "boolean",
      description: "Mode compact pour les espaces réduits",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppPassword>;

// Histoire principale avec des valeurs par défaut
export const Primary: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      password: "MotDePasse123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes:
        "Ceci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\nCeci est une note sécurisée\n",
    },
    onGeneratorConfig: () => {
      alert("Configurer le générateur de mot de passe");
    },
  },
};

// Variante en anglais
export const English: Story = {
  args: {
    locale: "en",
    passwordData: {
      username: "user@example.com",
      password: "Password123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "This is a secure note",
    },
  },
};

// Variante en espagnol
export const Spanish: Story = {
  args: {
    locale: "es",
    passwordData: {
      username: "usuario@ejemplo.com",
      password: "Contraseña123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Esta es una nota segura",
    },
  },
};

// Variante en allemand
export const German: Story = {
  args: {
    locale: "de",
    passwordData: {
      username: "benutzer@beispiel.de",
      password: "Passwort123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Dies ist eine sichere Notiz",
    },
  },
};

// Variante en chinois
export const Chinese: Story = {
  args: {
    locale: "zh",
    passwordData: {
      username: "用户@example.com",
      password: "密码123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "这是一个安全的笔记",
    },
  },
};

// Variante sans nom d'utilisateur
export const WithoutUsername: Story = {
  args: {
    locale: "fr",
    passwordData: {
      password: "MotDePasse123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Ceci est une note sécurisée",
    },
  },
};

// Variante sans mot de passe
export const WithoutPassword: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Ceci est une note sécurisée",
    },
  },
};

// Variante avec notes courtes (pas de bouton d'expansion)
export const ShortSecureNotes: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      password: "MotDePasse123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Note courte",
    },
  },
};

// readonly variante
export const ReadOnly: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      password: "MotDePasse123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Note courte",
    },
    readonly: true,
  },
};

// Variante avec un secret TOTP invalide
export const InvalidTotpSecret: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      password: "MotDePasse123!",
      totpSecret: "INVALIDE", // Moins de 16 caractères
      secureNotes: "Ceci est une note sécurisée",
    },
  },
};

// Variante avec des données vides
export const EmptyData: Story = {
  args: {
    locale: "fr",
    passwordData: {},
  },
};

// Mode compact - Vue par défaut
export const Compact: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      password: "MotDePasse123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Ceci est une note sécurisée pour tester le mode compact",
    },
    compact: true,
    onGeneratorConfig: () => {
      alert("Configurer le générateur de mot de passe");
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

// Mode compact - Readonly
export const CompactReadOnly: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      password: "MotDePasse123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Ceci est une note sécurisée",
    },
    compact: true,
    readonly: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

// Mode compact - Données minimales
export const CompactMinimal: Story = {
  args: {
    locale: "fr",
    passwordData: {
      username: "user@example.com",
      password: "Pass123!",
    },
    compact: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "350px" }}>
        <Story />
      </div>
    ),
  ],
};

// Mode compact - Toutes les langues
export const CompactEnglish: Story = {
  args: {
    locale: "en",
    passwordData: {
      username: "user@example.com",
      password: "Password123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "This is a secure note in compact mode",
    },
    compact: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

// Comparaison côte à côte : Normal vs Compact
export const NormalVsCompact: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      <div style={{ width: "500px" }}>
        <h3 style={{ marginBottom: "10px" }}>Normal Mode</h3>
        <AppPassword {...args} compact={false} />
      </div>
      <div style={{ width: "400px" }}>
        <h3 style={{ marginBottom: "10px" }}>Compact Mode</h3>
        <AppPassword {...args} compact={true} />
      </div>
    </div>
  ),
  args: {
    locale: "fr",
    passwordData: {
      username: "utilisateur@exemple.com",
      password: "MotDePasse123!",
      totpSecret: "JBSWY3DPEHPK3PXP",
      secureNotes: "Ceci est une note sécurisée pour comparer les deux modes d'affichage.",
    },
    onGeneratorConfig: () => {
      alert("Configurer le générateur de mot de passe");
    },
  },
  decorators: [],
  parameters: {
    layout: "padded",
  },
};
