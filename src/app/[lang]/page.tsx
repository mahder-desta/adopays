import React from "react";

import Faq from "../components/faq";
import Client from "../components/client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Partner from "../components/partner";
import Switcher from "../components/switcher";
import Download from "../components/download";
import AboutOne from "../components/about-one";
import AboutTwo from "../components/about-two";
import BannerOne from "../components/banner-one";
import Screenshot from "../components/screenshot";
import FeaturesOne from "../components/features-one";
import ScrollToTop from "../components/scroll-to-top";
import FeaturesTwo from "../components/features-two";

export default function Page() {
  return (
    <>
      <Navbar
        navLight={false}
        playBtn={true}
        bgLight={false}
        navCenter={true}
      />

      <BannerOne />

      <section className="relative md:py-24 py-16" id="features">
        <div className="container relative ">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Features
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Discover AdoPay Features
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Experience next-generation banking with our feature-rich app that
              puts financial control right at your fingertips.
            </p>
          </div>

          <FeaturesTwo />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <AboutOne />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <AboutTwo />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Loan Services
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Discover Our Loan Products
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Explore our range of loan products designed to meet your financial
              needs.
            </p>
          </div>

          <FeaturesOne />
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
              Experience seamless transactions with our user-friendly interface,
              designed to enhance your banking experience.
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
      {/* 
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
      </section> */}
    </>
  );
}
