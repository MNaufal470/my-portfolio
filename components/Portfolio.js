import React, { useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import ModalPorfolio from "./ModalPorfolio";
export default function Portfolio({ projects }) {
  const imagesDummy = {
    images: ["/preview.png", "/preview2.png", "/preview3.png"],
  };
  const [modal, setModal] = useState({
    show: false,
    item: {},
  });
  return (
    <section className=" pt-32 md:pt-60 ">
      <div className="max-w-6xl mx-auto">
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
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h3>
          <h1 className="text-6xl pt-3 font-bold text-[#c4cfde]">
            My Portfolio
          </h1>
        </motion.div>
        <motion.div
          className=" grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10"
          initial={{ opacity: 0, x: -500 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          {projects
            .sort(
              (first, second) =>
                new Date(second.dateStarted).getFullYear() -
                new Date(first.dateStarted).getFullYear()
            )
            .map((item) => (
              <div
                className="relative p-5 shadow-1 rounded-lg group cursor-pointer hover:bg-opacity-30 "
                onClick={() => setModal({ item: item, show: true })}
                key={item._id}
              >
                <img
                  src={
                    item.images ? urlFor(item.images[0]).url() : "/preview.png"
                  }
                  alt=""
                  className="rounded-lg group-hover:grayscale-0 overflow-hidden grayscale"
                />
                <div className="mt-3 flex flex-col justify-between ">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="tracking-[2px] text-[#f9004d] text-sm uppercase">
                        {item.application}
                      </h3>
                      <p className="text-[#c4cfde] text-sm font-semibold">
                        {new Date(item.dateStarted).getFullYear()}
                      </p>
                    </div>
                    <h1 className=" text-2xl pt-3 font-bold text-[#c4cfde]  group-hover:text-[#fff] transition-all duration-300">
                      {item.name}
                      <i className="ri-arrow-right-up-line text-sm opacity-0 group-hover:text-2xl group-hover:opacity-100 transition-all duration-300 text-[#f9004d]"></i>
                    </h1>
                  </div>
                  <div className="grid grid-cols-4 gap-4  hero items-end justify-end mt-3 ">
                    {item.technologies.map((item) => (
                      <div
                        className="p-3  rounded-md shadow-1  "
                        key={item._id}
                      >
                        <img
                          src={urlFor(item.image).url()}
                          alt=""
                          className="w-10 h-10 object-contain "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
        <ModalPorfolio
          isShow={modal?.show}
          setModal={setModal}
          item={modal?.item}
          selected={modal?.item?.images?.[0] ?? null}
          project={modal?.item}
        />
      </div>
    </section>
  );
}
