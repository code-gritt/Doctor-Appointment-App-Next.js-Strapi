import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleButton from "../ToggleButton";

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
    {
      id: 4,
      name: "Get Started",
      path: "/",
    },
  ];
  return (
    <>
      <header className="header sticky top-0 dark:bg-green-500/80 backdrop-blur-sm bg-white/30 shadow-md z-10 flex items-center justify-between px-8 py-02">
        <h1 className="w-3/12">
          <Image width={180} height={80} src="/doctorlogo.jpg" />
        </h1>

        <ul className="md:flex gap-8 hidden items-center nav font-semibold text-lg">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li className="p-4 dark:text-gray-800 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer active">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        <ToggleButton />
      </header>
    </>
  );
};

export default Header;
