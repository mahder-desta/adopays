"use client";
import React, { useState } from "react";
import Link from "next/link";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import CountUp from "react-countup";

import { FiChevronUp, FiDownload } from "react-icons/fi";

import { faq } from "../data/data";
import Image from "next/image";
import { translate } from "@/lib/utils";
import { Dictionary } from "../[lang]/dictionaries";
import { Question } from "../data/faq";

interface FaqData {
  id: number;
  title: string;
  desc: string;
}

export default function Faq({ dict }: { dict: Dictionary }) {
  let [isOpen, setOpen] = useState<boolean>(false);
  let [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="container relative">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
        <div className="relative order-1 md:order-2">
          <div className="relative">
            <Image
              src="/images/phone/16.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mx-auto md:max-w-xs lg:max-w-sm"
              alt=""
            />
          </div>
          <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-primary/20 via-primary/70 from-primary bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-primary/10 rounded-full"></div>

          {/* <div className="absolute bottom-28 md:start-0 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3">
            <div className="flex items-center">
              <div className="flex items-center justify-center size-[65px] bg-primary/5 text-primary text-center rounded-full me-3">
                <FiDownload className="size-6" />
              </div>
              <div className="flex-1">
                <h6 className="text-slate-400">Total Users</h6>
                <p className="text-xl font-bold">
                  <CountUp className="counter-value" end={45385} />
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="lg:me-8 order-2 md:order-1">
          <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
            FAQs
          </h6>
          <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            Have Questions? Look Here
          </h4>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have questions about our services? We're here to help! Please check
            out some of our FAQs below.
          </p>

          <div id="accordion-collapseone" className="mt-8">
            {faq.map((item: Question, index: number) => {
              return (
                <div
                  className={`relative shadow dark:shadow-gray-800 rounded-md overflow-hidden ${
                    index !== 0 ? "mt-3" : ""
                  }`}
                  key={index}
                >
                  <h2 className="font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveTab(index)}
                      className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                        activeTab === index
                          ? "bg-slate-50/50 dark:bg-slate-800/20 text-primary"
                          : ""
                      }`}
                    >
                      <span>{translate(item.question, dict)}</span>
                      <FiChevronUp
                        className={`size-4 shrink-0 ${
                          activeTab === index ? "" : "rotate-180"
                        }`}
                      />
                    </button>
                  </h2>
                  <div className={`${activeTab === index ? "" : "hidden"}`}>
                    <div className="p-5 text-slate-500 dark:text-slate-300">
                      <p className="">{translate(item.answer, dict)}</p>
                      {item.additional && (
                        <ul className="list-disc list-inside mt-4 ml-4">
                          {item.additional.map((additional, index) => (
                            <li key={index}>{translate(additional, dict)}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Link
              href="/faq"
              className="hover:text-primary dark:hover:text-primary after:bg-primary dark:text-white transition duration-500 font-medium"
            >
              Find Out More <i className="mdi mdi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
