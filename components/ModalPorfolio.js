import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export default function ModalPorfolio({
  isShow,
  item,
  setModal,
  selected,
  project,
}) {
  const sliderRef = useRef(null);

  function closeModal() {
    setModal({ item, show: false });
  }

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <Transition appear show={isShow} as={Fragment}>
      <Dialog as="div" className="relative z-10  " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto   w-full">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full     bg-[#212428] lg:p-20  text-left align-middle shadow-xl transition-all">
                <div className="w-full shadow-1   rounded-xl p-10">
                  <div className="relative grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-5 pb-10 border-b-2 border-[#121415] pt-5 lg:pt-0">
                    <div className="relative h-48 md:h-96">
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        ref={sliderRef}
                        loop
                      >
                        {item.images?.map((img) => (
                          <SwiperSlide key={img._key}>
                            <motion.img
                              src={urlFor(img).url()}
                              alt=""
                              className="w-full h-48 md:h-96 lg:h-96 rounded-lg object-cover object-top"
                              initial={{ opacity: 0 }}
                              whileInView={{
                                opacity: 1,
                              }}
                              transition={{
                                duration: 1.5,
                              }}
                            />
                          </SwiperSlide>
                        ))}

                        <i
                          className="ri-arrow-left-line text-xl text-[#c4cfde] absolute top-[50%] -left-0 p-2 px-3 bg-[#212428] rounded-full shadow-1 cursor-pointer hover:text-white z-50"
                          onClick={handlePrev}
                        ></i>
                        <i
                          className={`ri-arrow-right-line text-xl  absolute top-[50%] -right-0 p-2 px-3 bg-[#212428] rounded-full shadow-1 cursor-pointer hover:text-white text-[#c4cfde] 
                          z-50`}
                          onClick={handleNext}
                        ></i>
                      </Swiper>
                    </div>
                    <div className="space-y-3 ">
                      <h1 className="text-3xl md:text-4xl pt-3 font-bold text-[#c4cfde] ">
                        {project.name}
                      </h1>
                      <p className="text-[#878e99] text-xl pr-5">
                        {project.description}
                      </p>
                      <div className="space-y-2 py-5">
                        <p className="text-[#c4cfde] font-semibold">
                          Services:{" "}
                          <span className="text-[#878e99]">
                            {project.application}
                          </span>
                        </p>
                        <p className="text-[#c4cfde] font-semibold">
                          Date:{" "}
                          <span className="text-[#878e99]">
                            {new Date(project.dateStarted).getFullYear()}
                          </span>
                        </p>
                        <p className="text-[#c4cfde] font-semibold">
                          URL:{" "}
                          <a
                            className="text-[#878e99] underline"
                            href={`${
                              project.url !== "Under Maintenence"
                                ? project.url
                                : ""
                            }`}
                          >
                            {project.url}
                          </a>
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-10 md:gap-5 hero items-center justify-start mt-3 gap-x-4">
                        {project?.technologies?.map((tech) => (
                          <div
                            className="p-3  rounded-md shadow-1  "
                            key={tech._id}
                          >
                            <img
                              src={urlFor(tech.image).url()}
                              alt=""
                              className="w-10 h-10 object-contain "
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <i
                      className="ri-close-line absolute -top-10 cursor-pointer  text-[#f9004d] text-3xl p-2 px-3 -right-10 bg-[#212428] shadow-1 rounded-full"
                      onClick={closeModal}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl pt-3 font-bold text-[#c4cfde] text-center uppercase tracking-[3px]">
                      Summary
                    </h3>
                    <ul className="list-decimal pt-5 lg:px-10 lg:pl-20 space-y-5">
                      {project?.points?.map((point, i) => (
                        <li className="text-[#878e99] text-lg" key={i}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
