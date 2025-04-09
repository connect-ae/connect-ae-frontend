"use client";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Button from "../ui/Button";
import * as Icon from "@phosphor-icons/react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/app/config/routes";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="py-4 z-[99999] relative">
      <div className="container">
        <div className="flex items-center gap-2 justify-between">
          <Link
            href={NAVIGATION_LINKS?.home}
            className="relative w-36 md:w-52 h-12 self-stretch"
          >
            <Image
              src="/images/logo.svg"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
          <Navbar />
          <Button
            link={NAVIGATION_LINKS?.contact}
            className="lg:flex hidden"
            icon={<Icon.ArrowRight weight="bold" />}
            label="Let’s Connect."
            variant="primary"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
