"use client";
export const RowItemEditText = ({ editMode, value, onChange, onClick, maxLines = 1, inputType = "text" }) => {
    return (<>
      {maxLines > 1 ? (<textarea rows={maxLines} className={`w-full bg-transparent rounded-lg p-1 border outline-none ${editMode ? "" : "border-transparent"}`} value={value} onChange={(e) => onChange(e.target.value)} onClick={() => onClick()}/>) : (<input type={inputType} className={`w-full bg-transparent rounded-lg p-1 border outline-none text-ellipsis truncate ... ${editMode ? "" : "border-transparent"}`} value={value} onChange={(e) => onChange(e.target.value)} onClick={() => onClick()}/>)}
    </>);
};
