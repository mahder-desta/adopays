import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FiDribbble,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiShoppingCart,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between space-y-4 md:space-y-0 items-center">
          <div className="">
            <Link href="#" className="logo-footer">
              <Image
                src="/images/logo-light.png"
                width={73}
                height={21}
                className="md:ms-0 mx-auto"
                alt=""
              />
            </Link>
          </div>

          <div className=" md:mt-0">
            <div className="text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} AdoPay. Powered by{" "}
                <Link
                  href="https://aitplc.com"
                  target="_blank"
                  className="text-primary ml-1"
                >
                  AIT
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex space-x-6 justify-end">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
