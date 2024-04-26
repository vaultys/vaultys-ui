"use client";
import invert from "invert-color";

export interface TextIconProps {
  text?: string;
  backgroundColor?: string;
  className?: string;
}

export const TextIcon: React.FC<TextIconProps> = ({ text = "Te", backgroundColor = "#FFFFFF", className = "" }) => {
  if (!text) {
    text = "0x";
  }
  const fill = invert(backgroundColor, true);
  const padding = "0.3rem";
  const t = text.split(" ");
  let displayText = "";
  if (t.length > 1) displayText = t[0][0] + t[1][0];
  else displayText = text.slice(0, 2);

  const textSize = 80;
  const textWidth = displayText.length * textSize * 0.5;
  const textX = 64 - textWidth * 0.5;
  const textY = 90;

  return (
    <div style={{ backgroundColor, fill, padding }} className={className}>
      <svg viewBox="0 0 128 128">
        <text fontSize={textSize} fontFamily="monospace" x={textX} y={textY}>
          {displayText.slice(0, 2).toLocaleUpperCase()}
        </text>
      </svg>
    </div>
  );
};

export default TextIcon;
