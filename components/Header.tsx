/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SymbolIcon } from "@dynamic-devs/symbol-react";
import { SearchInput } from "./search/SearchInput";

const headerButtons = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
];

export const Header = () => {
  return (
    <div
      className="sticky top-0 left-0 py-2 px-4
      flex justify-between items-center shadow-md bg-white"
    >
      <div>
        <Link href="/">
          <img
            src="/images/dynamic-logo.jpg"
            alt="dynamic-logo"
            className="w-10 cursor-pointer"
          />
        </Link>
      </div>

      <div className="hidden md:block">
        <SearchInput />
      </div>

      <div className="flex items-center space-x-4">
        <SymbolIcon
          name="search"
          type="solid"
          className="block md:hidden w-5 h-5 text-dy-purple cursor-pointer"
        />

        {headerButtons.map((_, index) => (
          <Link key={index} href={_.href}>
            <a
              className="py-2 px-4 border border-dy-purple rounded-md text-dy-purple
              hover:bg-dy-purple hover:text-white capitalize"
            >
              {_.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
