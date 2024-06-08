import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import Button from "./Button";

const Navbar: FC = () => {
  const router: NextRouter = useRouter();

  return (
    <div className="bg-white-800 p-4 flex space-x-20 items-center">
      <div className="text-3xl" onClick={() => {
        router.push("/")
      }}>
        Create Good Profile on Testnet!
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
