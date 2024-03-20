import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-primary-foreground flex lg:px-40 px-20 justify-between">
      <div></div>
      <div>
        <ul className="flex p-4 items-center justify-center gap-4">
          <li className="text-sm">
            <Link href={"/"}>Terms and privacy.</Link>
          </li>
          <li className="text-sm">
            <Link href={"/"}>FAQ</Link>
          </li>
          <li>
            <Link href={"https://github.com/avayyyyyyy/"}>
              <Github />
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/shubhcodes/"}>
              <Twitter />
            </Link>
          </li>

          <li className="font-bold">AvatarMaker.</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
