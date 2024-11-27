"use client";
import React from "react";
import Image from "next/image";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const languages = [
  {
    name: "en",
    label: "English",
  },
  {
    name: "ti",
    label: "ትግርኛ",
  },
];
const Language = () => {
  type Language = {
    name: string;
    label: string;
  };

  const router = useRouter();
  const pathname = usePathname();
  const found = pathname
    ? languages.find((lang) => pathname.includes(lang.name))
    : null;
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    found ?? languages[0]
  );

  const handleSelected = (lang: string) => {
    setSelectedLanguage({
      ...selectedLanguage,
      name: lang,
      label: lang === "en" ? "English" : "ትግርኛ",
    });
    if (pathname) {
      router.push(`/${lang}/${pathname.split("/")[2]}`);
    }
  };
  return (
    <div className="relative">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-primary/10 py-2 px-4 text-sm/6 hover:bg-primary/20">
          <span className="text-sm text-default-600 font-bold capitalize flex items-center gap-2">
            {selectedLanguage ? selectedLanguage.label : "English"}
            <FiChevronDown className={`size-4 shrink-0 $`} />
          </span>
        </MenuButton>

        <MenuItems className="absolute mt-2 w-24 rounded-xl  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {languages.map((item, index) => (
            <MenuItem key={`flag-${index}`}>
              {({ active }) => (
                <button
                  className={`${active ? "bg-primary/10" : ""} ${
                    selectedLanguage && selectedLanguage.name === item.name
                      ? "bg-primary-100"
                      : ""
                  } group flex w-full items-center px-2 py-1.5`}
                  onClick={() => handleSelected(item.name)}
                >
                  <span className="text-sm text-default-600 capitalize">
                    {item.label}
                  </span>
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Language;
