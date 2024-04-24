import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <>
      <header className="header sticky top-0 bg-white shadow-md z-10 flex items-center justify-between px-8 py-02">
        <h1 className="w-3/12">
          <Image width={180} height={80} src="/doctorlogo.jpg" />
        </h1>

        <ul className="md:flex gap-8 hidden items-center nav font-semibold text-lg">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer active">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <Button className="bg-green-500 hover:scale-105 transition-all ease-in-out">
          Get Started
        </Button>
      </header>
    </>
  );
};

export default Header;
