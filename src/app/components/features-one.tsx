"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";

import { feature } from "../data/data";
import { IconType } from "react-icons";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";

export default function FeaturesOne() {
  interface Feature {
    icon: IconType;
    title: string;
    desc: string;
    active: boolean;
    requirements: string[];
  }
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div className=" mt-6 gap-6">
      <TabGroup
        className="w-full"
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
      >
        <div className="w-full">
          {/* Buttons */}
          <div className="flex justify-center w-full">
            <TabList className=" inline-flex flex-wrap justify-center rounded-xl bg-primary/5 p-1 mb-2 gap-3 ">
              {feature.map((tab, index) => {
                let Icon = tab.icon;

                return (
                  <Tab key={index} as={Fragment}>
                    <button
                      className={`h-10 flex-1 flex items-center justify-start md:justify-center rounded-lg  whitespace-nowrap  px-4 text-base font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-primary ${
                        selectedTab === index
                          ? "bg-primary/20 text-primary-900"
                          : "text-slate-600 hover:text-slate-primary"
                      }}`}
                    >
                      <Icon className="size-5 mr-2" />

                      {tab.title}
                    </button>
                  </Tab>
                );
              })}
            </TabList>
          </div>

          {/* Tab panels */}
          <TabPanels className="">
            <div className="relative flex flex-col">
              {feature.map((tab, index) => {
                return (
                  <TabPanel key={index} as={Fragment} static={true}>
                    <Transition show={selectedTab === index}>
                      <article className="w-full items-stretch rounded-2xl  shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-primary flex transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-12">
                        <div
                          className={`p-6  transition duration-500 rounded-3xl`}
                          key={index}
                        >
                          <div className="content mt-7">
                            <p className="text-lg  font-semibold">
                              {tab.title}
                            </p>
                            <p className="text-slate-400 mt-3">{tab.desc}</p>

                            <h6 className="font-semibold  text-sm   mb-1 mt-4">
                              Requirements
                            </h6>
                            <ul className="list-none text-slate-400 mt-4">
                              {tab.requirements.map((requirement, idx) => (
                                <li key={idx} className="mb-1 flex">
                                  <i className="mdi mdi-check text-primary text-xl me-2"></i>
                                  {requirement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    </Transition>
                  </TabPanel>
                );
              })}
            </div>
          </TabPanels>
        </div>
      </TabGroup>
      {/* {feature.map((item: Feature, index: number) => {
        let Icon = item.icon;
        return (
          <div
            className={`p-6  transition duration-500 rounded-3xl ${
              item.active
                ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800"
                : "shadow-xl shadow-slate-100 dark:shadow-slate-800"
            }`}
            key={index}
          >
            <div className="size-16 bg-primary/5 text-primary rounded-2xl flex align-middle justify-center items-center shadow-sm">
              <Icon className="size-5" />
            </div>

            <div className="content mt-7">
              <Link
                href=""
                className="text-lg hover:text-primary dark:text-white dark:hover:text-primary transition-all duration-500 ease-in-out font-semibold"
              >
                {item.title}
              </Link>
              <p className="text-slate-400 mt-3">{item.desc}</p>

              <h6 className="font-semibold  text-sm  tracking-wider mb-1 mt-4">
                Requirements
              </h6>
              <ul className="list-none text-slate-400 mt-4">
                {item.requirements.map((requirement, idx) => (
                  <li key={idx} className="mb-1 flex">
                    <i className="mdi mdi-check text-primary text-xl me-2"></i>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
