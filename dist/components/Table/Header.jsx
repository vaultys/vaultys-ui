"use client";
export const Header = ({ items }) => {
    return (<thead className="[&>tr]:first:rounded-large sticky top-5 z-20 [&>tr]:first:shadow-small">
      <tr>{items}</tr>
    </thead>);
};
