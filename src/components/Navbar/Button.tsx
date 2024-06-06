import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className="p-4 rounded-md min-w-24 text-lg text-center bg-black bg-opacity-0 hover:bg-opacity-20 hover:cursor-pointer duration-200 ease-in-out"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
