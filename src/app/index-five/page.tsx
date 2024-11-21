"use client";
import Image from "next/image";
import Link from "next/link";

import Faq from "../components/faq";
import Navbar from "../components/navbar";
import Client from "../components/client";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Partner from "../components/partner";
import Switcher from "../components/switcher";
import Download from "../components/download";
import AboutOne from "../components/about-one";
import AboutTwo from "../components/about-two";
import Screenshot from "../components/screenshot";
import FeaturesOne from "../components/features-one";
import ScrollToTop from "../components/scroll-to-top";
import dynamic from "next/dynamic";
import { FiDownload } from "react-icons/fi";
import CountUp from "react-countup";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

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

export default function Home() {
  return (
    <>
      <Navbar
        navLight={false}
        playBtn={true}
        bgLight={false}
        navCenter={true}
      />

      <section
        className="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-no-repeat bg-center bg-cover"
        id="home"
        style={{ backgroundImage: `url('/images/bg1.png')` }}
      >
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
            <div className="md:me-6">
              <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
                App Showcase
              </h6>
              <h4 className="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">
                Creative way to Showcase your app
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">
                Gain valuable insights into user behavior and drive
                data-informed decision-making with our revolutionary platform.
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
              {/* <Image
                src="/images/phone/1.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto w-80 rotate-12 relative z-2"
                alt=""
              /> */}
              <div className="relative z-2">
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
                      <h6 className="text-slate-400">Total Download</h6>
                      <p className="text-xl font-bold">
                        <CountUp className="counter-value" end={45485} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-primary/20 via-primary/70 from-primary bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-primary/10 rounded-full"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-primary/20 after:top-0 after:end-6 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="features">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Features
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Discover Powerful Features
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>

          <FeaturesOne />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <AboutOne />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <AboutTwo />
        </div>
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="screenshot"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Screenshots
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Simple & Beautiful Interface
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>
          <Screenshot />
        </div>
      </section>

      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <Faq />
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="download"
      >
        <Download />
      </section>

      <section className="relative md:py-24 py-16" id="reviews">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Reviews
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              10k+ Customers Trust Us
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>
          <Client />
        </div>
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="contact"
      >
        <Contact />
      </section>

      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container relative">
          <Partner />
        </div>
      </section>

      <Footer />

      <ScrollToTop />
      <Switcher />
    </>
  );
}
