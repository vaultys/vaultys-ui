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
      <div className="p-5 flex flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-5 animate-pulse">
          <img className="h-20" src={img} />
          {message}
        </div>
      </div>
    );
  } else return <></>;
};
