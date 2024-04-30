"use client";
import { useState } from "react";

export interface LoaderProps {
  message: string;
  img: string;
}

export const Loader: React.FC<LoaderProps> = ({ message, img }) => {
  const [show, setShow] = useState(false);
  setTimeout(() => setShow(true), 200);

  if (show) {
    return (
      <div className="vui-p-5 vui-flex vui-flex-row vui-items-center vui-justify-center">
        <div className="vui-flex vui-flex-col vui-items-center vui-gap-5 vui-animate-pulse">
          <img className="vui-h-20" src={img} />
          {message}
        </div>
      </div>
    );
  } else return <></>;
};
