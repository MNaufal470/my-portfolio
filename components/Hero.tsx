import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import CircleBg from "./CircleBg";
import { motion } from "framer-motion";
import { PageInfo, Skill } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
};

export default function Hero({ pageInfo, skills }: Props) {
  const [text, count] = useTypewriter({
    words: ["a Front-end Developer", "guy-who-love-coffe.tsx"],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <section className="relative  ">
      <div className="grid lg:grid-cols-2 rid-cols-1 max-w-6xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-20 pt-14 md:pt-0 space-y-5 flex flex-col lg:order-first order-last px-10 md:px-20 lg:px-0"
        >
          <h3 className="uppercase tracking-[3px] text-[#c4cfde] font-[500] text-sm">
            Welcome To My word
          </h3>
          <h1 className="flex  text-white font-bold gap-x-2 text-5xl">
            Hi, I'm <span className="text-[#ff014f]">{pageInfo.surName}</span>
          </h1>
          <h1 className="text-5xl font-bold text-white ">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#ff014f" />
          </h1>
          <p className="text-[#c4cfde] text-lg leading-[30px] pt-6 text-justify md:text-left">
            {pageInfo.backgroundInformation}
          </p>
          <div className="pt-4 flex md:flex-row flex-col gap-y-10 justify-between md:items-center items-start">
            <div className="space-y-3">
              <span className="uppercase tracking-[2px] text-[#c4cfde] text-sm">
                Best Skill On
              </span>
              <div className="flex hero items-center gap-x-4">
                {skills.map((item) => {
                  if (item.isBestSkill) {
                    return (
                      <div
                        className="p-3 buttonContact rounded-md shadow-1  "
                        key={item._id}
                      >
                        <img
                          src={urlFor(item?.image).url()}
                          alt=""
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="space-y-3">
              <span className="uppercase tracking-[2px] text-[#c4cfde] text-sm">
                More About Me
              </span>
              <a
                href="naufal.pdf"
                download={"naufal.pdf"}
                className="p-3  buttonContact rounded-md shadow-1 flex items-end gap-x-2 "
              >
                <ArrowDownTrayIcon className="w-7 h-7 text-white" />
                <span className="font-normal  text-[#c4cfde]">My Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
        <div>
          <CircleBg />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.4, 0.6, 0.8, 1.0],
            }}
            transition={{
              duration: 2.5,
            }}
            src={urlFor(pageInfo?.heroImage).url()}
            alt=""
            className="relative md:-mt-20   w-50 h-48 md:h-full mx-auto object-cover md:pl-10 rounded-b-full"
          />
        </div>
      </div>
    </section>
  );
}
