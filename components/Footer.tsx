import { Github, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <ul className="flex p-4 bg-primary-foreground items-center justify-center gap-4">
        <li className="text-sm">Terms and privacy.</li>
        <li className="text-sm">FAQ</li>
        <li>
          <Github />
        </li>
        <li>
          <Twitter />
        </li>

        <li className="font-bold">AvatarMaker.</li>
      </ul>
    </div>
  );
};

export default Footer;
