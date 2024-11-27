"use client";
import React, { useEffect, useState } from "react";
import { Link as Link1 } from "react-scroll";

import { FiUser } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import Language from "./language";

export default function Navbar({
  navLight,
  playBtn,
  bgLight,
  navCenter,
  language,
}: {
  navLight: boolean;
  playBtn: boolean;
  bgLight: boolean;
  navCenter: boolean;
  language?: boolean;
}) {
  let [menu, setMenu] = useState<Boolean>(false);
  let [scroll, setScroll] = useState<Boolean>(false);
  let [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const params = useParams();
  const lang = params.lang as string;

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Update URL hash without triggering scroll
            const newUrl = `${window.location.pathname}#${entry.target.id}`;
            window.history.replaceState(null, "", newUrl);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when section is 50% visible
        rootMargin: "-50px 0px -50px 0px", // Adjust trigger area
      }
    );

    // Observe all sections
    const sections = ["home", "features", "screenshot", "faqs", "download"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  });

  // Updated isActive function
  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}` && !activeSection;
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];
      return activeSection === sectionId;
    }
    return pathname === href;
  };

  return (
    <nav
      className={`navbar ${
        bgLight ? "bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" : ""
      } ${scroll ? "is-sticky" : ""}`}
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        {!navLight && (
          <Link className="navbar-brand md:me-8" href="/">
            <Image
              src="/images/logo-dark.png"
              width={73}
              height={21}
              className="h-5 inline-block dark:hidden"
              alt=""
            />
            <Image
              src="/images/logo-light.png"
              width={73}
              height={21}
              className="h-5 hidden dark:inline-block"
              alt=""
            />
          </Link>
        )}
        {navLight && (
          <Link className="navbar-brand" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/logo-dark.png"
                width={73}
                height={21}
                className="l-dark"
                alt=""
              />
              <Image
                src="/images/logo-light.png"
                width={73}
                height={21}
                className="l-light"
                alt=""
              />
            </span>
            <Image
              src="/images/logo-light.png"
              width={73}
              height={21}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        )}

        <div className="nav-icons flex items-center lg_992:order-2 md:ms-6">
          {playBtn && (
            <ul className="list-none menu-social mb-0">
              <li className="inline">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"
                >
                  <Image
                    src="/images/appstore.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </Link>
              </li>

              <li className="inline ms-1">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"
                >
                  <Image
                    src="/images/playstore.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          )}
          {language && <Language />}
          <button
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden"
            onClick={() => setMenu(!menu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div
          className={`navigation lg_992:order-1 lg_992:flex  ${
            navCenter ? "" : "ms-auto"
          } ${menu ? "" : "hidden"}`}
          id="menu-collapse"
        >
          <ul
            className={`navbar-nav ${navLight ? "nav-light" : ""}`}
            id="navbar-navlist"
          >
            <li className="nav-item ms-0">
              <Link
                className={`nav-link ${isActive(`/${lang}`) ? "active" : ""}`}
                href={`/${lang}#home`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link
                className={`nav-link ${
                  isActive(`/${lang}#features`) ? "active" : ""
                }`}
                href={`/${lang}#features`}
              >
                Features
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link
                className={`nav-link ${
                  isActive(`/${lang}#screenshot`) ? "active" : ""
                }`}
                href={`/${lang}#screenshot`}
              >
                Application
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link
                className={`nav-link ${
                  isActive(`/${lang}#faqs`) ? "active" : ""
                }`}
                href={`/${lang}#faqs`}
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link
                className={`nav-link ${
                  isActive(`/${lang}#download`) ? "active" : ""
                }`}
                href={`/${lang}#download`}
              >
                Download
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link
                className={`nav-link ${
                  isActive("/privacy-policy") ? "active" : ""
                }`}
                href={`/${lang}/privacy-policy`}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
