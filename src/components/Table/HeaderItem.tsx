"use client";

import { ReactElement } from "react";
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown";

export enum SortType {
  ASCENDING,
  DESCENDING,
}

export interface HeaderItemProps {
  title?: string;
  children?: ReactElement;
  sortColumn?: boolean;
  sortActive?: boolean;
  sortType?: SortType;
  onClick?: () => void;
  className?: string;
  testId?: string;
}

export const HeaderItem: React.FC<HeaderItemProps> = ({ title, children, sortColumn = false, sortActive, sortType = SortType.ASCENDING, onClick, className, testId }) => {
  return (
    <th
      className={`bg-background first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] py-2 px-2 ${
        sortColumn && "cursor-pointer"
      } ${className}`}
      onClick={() => sortColumn && typeof onClick === "function" && onClick()}
      data-test={testId}
    >
      <div className="flex flex-row gap-2">
        {title}
        {children}
        {sortColumn && <FaCaretDown className={`transition-all transform ${sortActive ? "visible" : "invisible"} ${sortType === SortType.ASCENDING && "rotate-180"}`} />}
      </div>
    </th>
  );
};
