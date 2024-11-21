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
        <div className="flex flex-col justify-center space-y-4 items-center">
          <div className="md:col-span-3">
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

          <div className="md:col-span-5 md:mt-0 mt-8">
            <div className="text-center ">
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
        </div>
      </div>
    </footer>
  );
}
