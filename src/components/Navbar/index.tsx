import { FC } from "react";
import Button from "./Button";

const Navbar: FC = () => {
  return (
    <div className="bg-slate-800 p-4 rounded-md flex space-x-20 items-center">
      <div className="text-3xl">
        Hello navbar
      </div>
      <div className="flex space-x-2">
        <Button onClick={() => {
          console.log("Hi from button 1")
        }}>
          Button 1
        </Button>
        <Button onClick={() => {
          console.log("Hi from button 2")
        }}>
          Button 2
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
