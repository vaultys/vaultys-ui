"use client";
import { Avatar, AvatarProps } from "@heroui/react";

// Generate a consistent color from text
const stringToColor = (text: string): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate HSL color with fixed saturation and lightness
  const h = Math.abs(hash % 360);
  return `hsl(${h}, 70%, 60%)`;
};

export interface TextIconProps extends Omit<AvatarProps, "backgroundColor"> {
  text?: string;
  backgroundColor?: string;
  className?: string;
}

export const TextIcon: React.FC<TextIconProps> = ({ text = "Te", backgroundColor, className = "", ...props }) => {
  // Use provided backgroundColor or generate one from text
  const bgColor = backgroundColor || stringToColor(text);

  return (
    <Avatar
      getInitials={(value) => {
        if (!value) return "";
        const nameParts = value.trim().split(/\s+/).filter(Boolean);
        if (nameParts.length > 1) {
          // Get initials (first letter of each part)
          return nameParts
            .map((part) => part[0].toUpperCase())
            .join("")
            .substring(0, 2);
        } else {
          // If not possible, just take the first two letters
          return value.substring(0, 2).toUpperCase();
        }
      }}
      name={text}
      style={{ backgroundColor: bgColor }}
      className={className}
      {...props}
      classNames={{
        base: "",
        fallback: "",
        icon: "",
        img: "",
        name: "",
      }}
    />
  );
};

export default TextIcon;
