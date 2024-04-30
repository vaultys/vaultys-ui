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
      <div className="py-7 h-screen flex flex-row items-center bg-primary">
        <div className="flex flex-col items-center m-auto gap-5 p-10 backdrop-blur rounded-full shadow-[rgba(0,_0,_0,_0.2)_0px_30px_20px_-7px] bg-white bg-opacity-25">
          <img src={img} className="h-56" alt="Smartlink" />
          <div className="">{message}</div>
        </div>
      </div>
    );
  } else return <></>;
};

export default Loader;
