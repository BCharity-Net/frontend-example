import { FC } from "react";
import Button from "./Button";
import { NextRouter, useRouter } from "next/router";

const Navbar: FC = () => {
  const router: NextRouter = useRouter();

  return (
    <div className="bg-slate-800 p-4 flex space-x-20 items-center">
      <div className="text-3xl" onClick={() => {
        router.push("/")
      }}>
        Hello navbar
      </div>
      <div className="flex space-x-2">
        <Button onClick={() => {
          console.log("Hi from button 1")
          router.push("/p/button1")
        }}>
          Button 1
        </Button>
        <Button onClick={() => {
          console.log("Hi from button 2")
          router.push("/p/button2")
        }}>
          Button 2
        </Button>
        <Button onClick={() => {
          router.push("/profile")
        }}>
          Profile
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
