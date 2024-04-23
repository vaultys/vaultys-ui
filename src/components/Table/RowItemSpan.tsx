"use client";

export interface RowItemSpanProps {
  value: string;
}

export const RowItemSpan: React.FC<RowItemSpanProps> = ({ value }) => {
  return <span>{value}</span>;
};
