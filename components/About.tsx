import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import CountUp from "react-countup";
import { PageInfo, Skill, Social } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  socials: Social[];
};

export default function About({ pageInfo, skills, socials }: Props) {
  const [selected, setSelected] = useState("about");
  const sort = skills.sort(
    (first: any, second: any) => second.progress - first.progress
  );
  const not0 = sort.filter((item) => item.progress > "2");

  return (
    <section className="max-w-6xl mx-auto pt-32 md:pt-60 ">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-[#f9004d] uppercase text-sm font-[100] tracking-[1px]">
          my Background
        </h3>
        <h1 className="text-6xl pt-3 font-bold text-[#c4cfde]">About Me</h1>
      </motion.div>
      <div className="flex flex-col md:flex-row pt-10 md:pt-20 items-center justify-center gap-x-20 gap-y-10 px-5 lg:px-0">
        <motion.div className="w-full">
          <div className="mb-7 grid grid-cols-3 items-center shadow-1 w-full ">
            <span
              className={`p-4 buttonAbout  ${
                selected === "about" ? "aboutActive" : ""
              }`}
              onClick={() => setSelected("about")}
            >
              Me
            </span>
            <span
              className={`p-4 buttonAbout  ${
                selected === "skill" ? "aboutActive" : ""
              }`}
              onClick={() => setSelected("skill")}
            >
              My Skills
            </span>
            <span
              className={`md:p-4 buttonAbout  ${
                selected === "education" ? "aboutActive" : ""
              }`}
              onClick={() => setSelected("education")}
            >
              My Educations
            </span>
          </div>
          <div className="shadow-1 rounded-2xl  p-6  overflow-x-hidden">
            {selected === "skill" && (
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
                {not0.slice(0, not0.length / 2 + 1).map((item) => (
                  <motion.div
                    className="flex flex-col gap-y-1"
                    initial={{ x: -500, opacity: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    key={item._id}
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={urlFor(item.image).url()}
                          alt=""
                          className="w-5 h-5 rounded-full object-contain"
                        />
                        <h1 className="uppercase text-[#c4cfde] text-xs tracking-[2px]">
                          {item.title}
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-4 rounded-full bg-[#e9ecef] progressShadow ">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="absolute flex justify-end h-3 progress top-0.5 left-0.5 rounded-full "
                      >
                        <motion.h1 className="-mt-5 uppercase text-[#c4cfde] text-xs">
                          <CountUp
                            end={Number(item.progress)}
                            duration={2.52}
                          />
                          %
                        </motion.h1>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                {not0.slice(not0.length / 2, not0.length + 1).map((item) => (
                  <motion.div
                    className="flex flex-col gap-y-1"
                    initial={{ x: -500, opacity: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={urlFor(item.image).url()}
                          alt=""
                          className="w-5 h-5 rounded-full object-contain"
                        />
                        <h1 className="uppercase text-[#c4cfde] text-xs tracking-[2px]">
                          {item.title}
                        </h1>
                      </div>
                    </div>
                    <div className="relative w-full h-4 rounded-full bg-[#e9ecef] progressShadow ">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="absolute flex justify-end h-3 progress top-0.5 left-0.5 rounded-full "
                      >
                        <motion.h1 className="-mt-5 uppercase text-[#c4cfde] text-xs">
                          <CountUp
                            end={Number(item.progress)}
                            duration={2.52}
                          />
                          %
                        </motion.h1>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {selected === "about" && (
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 items-start">
                <motion.img
                  src={urlFor(pageInfo?.profilePic).url()}
                  alt=""
                  className="  w-full  h-[full] rounded-xl object-cover object-bottom shadow-1 hover:grayscale"
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                />
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h1 className="text-6xl pt-10 font-bold text-[#c4cfde] ">
                    {pageInfo?.name}
                  </h1>
                  <p className="text-[#878e99] font-normal text-xl mb-20">
                    {pageInfo?.age} Years Old
                  </p>

                  <h1 className="text-lg  font-bold text-[#c4cfde] border-b-2 border-[#1a1d23] pb-3">
                    Here is a Little{" "}
                    <span className="text-[#f9004d]  ">Background</span>
                  </h1>
                  <p className="text-[#878e99] font-normal text-sm md:text-lg  leading-8 pt-3">
                    {pageInfo?.backgroundInformation}
                  </p>
                  <div className=" mt-10 flex justify-end gap-x-5">
                    {socials.map((item) => (
                      <div className="buttonContact rounded-md" key={item._id}>
                        <SocialIcon
                          url={item.url}
                          fgColor="white"
                          bgColor="transparent"
                          className="animate-pulse"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
            {selected === "education" && (
              <motion.div
                className="space-y-10"
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <span className="text-[#f9004d] tracking-wide">
                    2015 - 2018
                  </span>
                  <h1 className="text-xl  font-bold text-[#c4cfde]">
                    SMK Tinta Emas Indonesia
                  </h1>
                  <h3 className="text-xs text-[#c4cfde]">
                    Computer Network Engineering
                  </h3>
                </div>
                <div>
                  <span className="text-[#f9004d] tracking-wide">
                    2018 - 2022
                  </span>
                  <h1 className="text-xl  font-bold text-[#c4cfde]">
                    University Of Gunadarma
                  </h1>
                  <h3 className="text-xs text-[#c4cfde]">
                    Technical Information
                  </h3>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
