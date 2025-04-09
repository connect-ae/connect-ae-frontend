"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/app/config/routes";
import { usePathname } from "next/navigation";
import * as Icon from "@phosphor-icons/react";
import Image from "next/image";
import Button from "../ui/Button";

interface Props {
  className?: string;
}
const Navbar = ({ className }: Props) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${className && className} `}>
      <ul className="space-x-6 hidden lg:flex">
        {ROUTES.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`uppercase text-sm font-semibold text-dark transition-colors ${
                pathname === item.path ? "text-primary" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="block lg:hidden"
      >
        <Icon.List size={28} weight="bold" />
      </button>

      <div
        className={`flex flex-col gap-8 lg:hidden fixed bg-linear-to-br transition-all duration-500 from-white to-accent-focus top-0 left-0 w-full h-full p-6 ${
          isMenuOpen ? "left-0 open-menu" : "left-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="relative w-36 md:w-40 h-auto self-stretch">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <Button
            className="order-1 lg:order-2"
            icon={<Icon.ArrowRight weight="bold" />}
            label="Let’s Connect."
            variant="primary"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-20 flex-1">
          <ul
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center flex-wrap gap-6 "
          >
            {ROUTES.map((item) => (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`uppercase text-2xl min-[425px]:text-3xl sm:text-4xl font-medium text-dark transition-colors ${
                    pathname === item.path ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-1 ml-auto"
        >
          <Icon.X size={16} weight="bold" />
          <span className="text-lg font-medium">Close</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
