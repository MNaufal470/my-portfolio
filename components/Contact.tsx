import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import ContactInput from "./ContactInput";
import { PageInfo, Social } from "../typing";
type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

export default function Contact({ pageInfo, socials }: Props) {
  return (
    <div className=" pt-32 md:pt-60  ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center px-5 lg:px-0"
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
            Contact
          </h3>
          <h1 className="text-6xl pt-3 font-bold text-[#c4cfde]">
            Contact With Me
          </h1>
        </motion.div>
        <div className="flex mt-20 gap-x-20 gap-y-10 px-5 lg:px-0 justify-center flex-col lg:flex-row">
          <motion.div
            className="p-5 px-7 bg-[#212428] shadow-1 rounded-lg max-w-sm md:max-w-full lg:max-w-sm"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
          >
            <img src="/contact1.png" alt="" className="w-full rounded-lg" />
            <div className="space-y-3 mt-3">
              <p className="text-xl md:text-3xl pt-3 font-bold text-[#e4e6ea] ">
                {pageInfo?.name}
              </p>
              <p className="text-base text-[#878e99] ">{pageInfo?.role}</p>
              <p className="text-lg text-[#878e99]  ">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div>
                <p className=" text-[#878e99] font-semibold">
                  Phone:{" "}
                  <span className="text-[#c4cfde]">
                    +{pageInfo?.phoneNumber}
                  </span>
                </p>
                <p className=" text-[#878e99] font-semibold">
                  Email:{" "}
                  <span className=" text-[#c4cfde] ">{pageInfo?.email}</span>
                </p>
              </div>
              <div className="space-y-3 pt-5">
                <span className="uppercase tracking-[2px] text-[#878e99] text-sm">
                  FIND WITH ME
                </span>
                <div className="  flex justify-start gap-x-3">
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
              </div>
            </div>
          </motion.div>
          <motion.div
            className="max-w-xl md:max-w-full lg:max-w-xl  bg-[#212428] shadow-1 rounded-lg p-5 px-7"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
          >
            <ContactInput />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
