"use client";

export interface RowItemEditTextProps {
  editMode: boolean;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
  maxLines?: number;
  inputType?: string;
}

export const RowItemEditText: React.FC<RowItemEditTextProps> = ({ editMode, value, onChange, onClick, maxLines = 1, inputType = "text" }) => {
  return (
    <>
      {maxLines > 1 ? (
        <textarea
          rows={maxLines}
          className={`vui-w-full vui-bg-transparent vui-rounded-lg vui-p-1 vui-border vui-outline-none ${editMode ? "" : "vui-border-transparent"}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onClick={() => onClick()}
        />
      ) : (
        <input
          type={inputType}
          className={`vui-w-full vui-bg-transparent vui-rounded-lg vui-p-1 vui-border vui-outline-none vui-text-ellipsis vui-truncate ... ${editMode ? "" : "vui-border-transparent"}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onClick={() => onClick()}
        />
      )}
    </>
  );
};
