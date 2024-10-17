"use client";
import invert from "invert-color";
export const TextIcon = ({ text = "Te", backgroundColor = "#FFFFFF", className = "" }) => {
    if (!text) {
        text = "0x";
    }
    const fill = invert(backgroundColor, true);
    const t = text.split(" ");
    let displayText = "";
    if (t.length > 1)
        displayText = t[0][0] + t[1][0];
    else
        displayText = text.slice(0, 2);
    const textSize = 65;
    const textX = 11;
    const textY = 73;
    return (<div style={{ backgroundColor, fill }} className={className}>
      <svg className="m-0 p-0" viewBox="0 0 100 100">
        <text fontSize={textSize} fontFamily="monospace" x={textX} y={textY}>
          {displayText.slice(0, 2).toLocaleUpperCase()}
        </text>
      </svg>
    </div>);
};
export default TextIcon;
