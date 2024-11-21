import React from "react";
import Link from "next/link";

import { feature } from "../data/data";
import { IconType } from "react-icons";

export default function FeaturesOne() {
  interface Feature {
    icon: IconType;
    title: string;
    desc: string;
    active: boolean;
    requirements: string[];
  }
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
      {feature.map((item: Feature, index: number) => {
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
      })}
    </div>
  );
}
