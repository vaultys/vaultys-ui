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

export const HeaderItem: React.FC<HeaderItemProps> = ({
  title,
  children,
  sortColumn = false,
  sortActive,
  sortType = SortType.ASCENDING,
  onClick,
  className,
  testId,
}) => {
  return (
    <th
      className={`vui-bg-light dark:vui-bg-dark first:vui-rounded-l-lg rtl:first:vui-rounded-r-lg rtl:first:vui-rounded-l-[unset] last:vui-rounded-r-lg rtl:last:vui-rounded-l-lg rtl:last:vui-rounded-r-[unset] vui-py-2 vui-px-2 ${
        sortColumn && "vui-cursor-pointer"
      } ${className}`}
      onClick={() => sortColumn && typeof onClick === "function" && onClick()}
      data-test={testId}
    >
      <div className="vui-flex vui-flex-row vui-gap-2">
        {title}
        {children}
        {sortColumn && (
          <FaCaretDown
            className={`vui-transition-all vui-transform ${sortActive ? "vui-visible" : "vui-invisible"} ${sortType === SortType.ASCENDING && "vui-rotate-180"}`}
          />
        )}
      </div>
    </th>
  );
};
