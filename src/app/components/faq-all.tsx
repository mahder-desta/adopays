"use client";
import React, { useState } from "react";
import Link from "next/link";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import CountUp from "react-countup";

import { FiChevronUp, FiDownload } from "react-icons/fi";

import Image from "next/image";
import faq, { Question } from "../data/faq";
import { translate } from "@/lib/utils";
import { Dictionary } from "../[lang]/dictionaries";

interface FaqAllProps {
  faqData: Question[];
  dict: Dictionary;
}

export default function FaqAll({ dict }: { dict: Dictionary }) {
  return (
    <div className="lg:mx-8 w-full">
      <div className=" flex flex-col space-y-16">
        {Object.keys(faq).map((key: string) => (
          <div>
            <h5 className="text-xl font-bold mb-4">
              {translate(faq[key].title, dict)}
            </h5>
            <Accordion faqData={faq[key].questions} dict={dict} />
          </div>
        ))}
      </div>
    </div>
  );
}

const Accordion = ({ faqData, dict }: FaqAllProps) => {
  let [isOpen, setOpen] = useState<boolean>(false);
  let [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full">
      <div id="accordion-collapseone" className="">
        {faqData.map((item: Question, index: number) => {
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
    </div>
  );
};
