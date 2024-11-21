"use client";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import CountUp from "react-countup";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import { FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function BannerOne() {
  let [isOpen, setOpen] = useState<boolean>(false);

  let images = [
    "/images/phone/1.png",
    "/images/phone/2.png",
    "/images/phone/3.png",
    "/images/phone/4.png",
    "/images/phone/5.png",
    "/images/phone/6.png",
  ];

  const settings = {
    container: ".tiny-single-item",
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 0,
  };

  return (
    <section
      className="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-no-repeat bg-center bg-cover before:content-[''] before:absolute md:before:bottom-[30rem] sm:before:bottom-[35rem] xl:before:right-[13rem] lg:before:-right-[13rem] md:before:-right-[16rem] sm:before:-right-[15rem] before:w-[55rem] before:h-[25rem] before:rotate-[100deg] before:bg-gradient-to-r before:to-transparent before:via-primary/50 before:from-primary before:z-1"
      id="home"
      style={{ backgroundImage: `url('/images/bg1.png')` }}
    >
      <div className="container relative z-1">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
          <div className="md:me-6">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Mobile Banking Made Easy
            </h6>
            <h4 className="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">
              <span className="text-primary dark:text-accent">ado</span>pay-
              Banking at your fingertips
            </h4>
            <p className="text-slate-400 text-lg max-w-xl">
              {/* // generate description make it appealing and professional */}
              Adopay is a mobile banking application provided by Dedebit
              Microfinance Institution that allows you to manage your finances
              on the go.
            </p>

            <div className="mt-6">
              <Link href="#">
                <Image
                  src="/images/app.png"
                  width={152}
                  height={128}
                  className="h-12 inline-block m-1"
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/play.png"
                  width={152}
                  height={128}
                  className="h-12 inline-block m-1"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto w-80">
              <div className="tiny-single-item">
                <TinySlider settings={settings}>
                  {images.map((item: any, index: number) => {
                    return (
                      <div className="tiny-slide" key={index}>
                        <Image
                          src={item}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-3xl"
                          style={{ width: "100%", height: "auto" }}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </TinySlider>
              </div>
            </div>

            <div className="absolute bottom-28 md:start-5 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3 mover">
              <div className="flex items-center">
                <div className="flex items-center justify-center size-[65px] bg-primary/5 text-primary text-center rounded-full me-3">
                  <FiDownload className="size-6" />
                </div>
                <div className="flex-1">
                  <h6 className="text-slate-400">Total Downloads</h6>
                  <p className="text-xl font-bold">
                    <CountUp className="counter-value" end={45385} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
