import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { getDictionary } from "../dictionaries";
import FaqAll from "@/app/components/faq-all";

export default async function PrivacyPolicy({
  params: { lang },
}: {
  params: { lang: "en" | "ti" };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Navbar
        navLight={false}
        playBtn={false}
        bgLight={false}
        navCenter={true}
        language={true}
      />

      <section className="relative md:py-24 my-24">
        <div className="container relative">
          <div className="md:flex flex-col justify-center items-center">
            <h5 className="text-3xl font-bold mb-16 text-center">
              {dict.faq.title}
            </h5>

            <FaqAll dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
