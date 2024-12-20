import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function AboutTwo() {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
      <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
        <div className="pt-12 px-12 rounded-2xl bg-primary/5 dark:bg-primary/10 shadow shadow-primary/20">
          <Image
            src="/images/phone/half-2.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>
      </div>

      <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
        <div className="lg:me-10">
          <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
            Unlimited Destinations
          </h6>
          <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            Transact with <br /> Any Bank and Wallets
          </h4>
          <p className="text-slate-400 max-w-xl">
            Our platform supports a wide range of banks and wallets, allowing
            you to seamlessly transfer funds to any bank account or wallet.
          </p>

          <ul className="list-none text-slate-400 mt-6">
            <li className="mb-1 flex">
              <i className="mdi mdi-check text-primary text-xl me-2"></i> Access
              a wide range of banks and wallets for seamless transactions
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-primary text-xl me-2"></i> Easy
              and fast, just select the bank or wallet
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-primary text-xl me-2"></i> No
              downtime, reach any bank or wallet anytime
            </li>
          </ul>

          {/* <div className="mt-6">
            <Link
              href=""
              className="hover:text-primary dark:hover:text-primary after:bg-primary dark:text-white transition duration-500 font-medium"
            >
              Learn More <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
