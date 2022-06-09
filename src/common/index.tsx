import React from "react";

type Props = {
  message: string;
  children?: React.ReactNode;
};

const CustomTooltip = ({ message, children }: Props) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute items-center top-140% hidden group-hover:flex">
        <span className="relative z-10 p-2 text-sm leading-none text-black bg-transparent border border-black rounded-md shadow-lg dark:text-white dark:border-white dark:shadow-none">
          {message}
        </span>
      </div>
    </div>
  );
};

export default CustomTooltip;
