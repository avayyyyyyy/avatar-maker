import { Zap } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import ModeToggle from "./toggleTheme";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-[80vw] mx-auto flex my-4 items-center justify-between border-b-2 pb-4">
      <Link href="/" className="flex text-xl gap-1 ">
        <Zap className="font-bold" />
        <span className="hidden lg:block font-bold">AvatarMaker.</span>
      </Link>
      <div className="flex space-x-2">
        <ModeToggle />
        <Button variant={"secondary"}>Prompts</Button>
        <Button variant={"default"} className="shadow-lg">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
