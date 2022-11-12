import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typing";
type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className=" max-w-6xl mx-auto py-5 md:px-20 lg:px-0 flex items-center justify-between">
      <motion.div
        className="flex items-center space-x-2"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {socials?.map((item) => (
          <SocialIcon
            url={item.url}
            fgColor="white"
            bgColor="transparent"
            key={item._id}
          />
        ))}
      </motion.div>
    </header>
  );
}
