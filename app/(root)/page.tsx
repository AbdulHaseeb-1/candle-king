"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LocalFont from "next/font/local";

const font = LocalFont({
  src: "../../fonts/Agdasima-Regular.ttf",
  variable: "--font-play",
});

export default function Root() {
  return (
    <motion.div
      className="flex h-screen justify-center gap-1 flex-col items-center"
      transition={{ delay: 5 }}
    >
      <motion.div animate={{ x: -200 }} transition={{ delay: 4, duration: 2 }}>
        <motion.div
          initial={{ y: -500, opacity: 0, rotate: 0 }}
          animate={{
            y: [-500, -500, -65, -150, -25, -50, -15, -10, 0],
            rotate: [0, 0, 5, 0, -5, 0, 5, 0, 0],
            opacity: [1, 1],
          }}
          transition={{
            delay: 1,
            duration: 3.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.85, 1],
            ease: "easeOut",
          }}
          className="origin-bottom z-10"
        >
          <Image
            src={"./logo/unfilled-white/kings-head.svg"}
            alt=""
            className="w-52 h-fit"
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div>
      <motion.div animate={{ x: -200 }} transition={{ delay: 4, duration: 2 }}>
        <motion.div className="flex gap-1 relative">
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="relative z-0"
          >
            <Image
              src={"./logo/unfilled-white/small-candle.svg"}
              alt=""
              className="w-[3.2em] h-fit"
              width={1000}
              height={1000}
            />
          </motion.div>
          <motion.div
            initial={{ x: -1000, y: -65, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative z-0"
          >
            <motion.div
              animate={{
                x: 0,
                y: [-65, -65, -25, -10, 25, 25, 40, 40, 65],
              }}
              transition={{
                delay: 1,
                duration: 2.5,
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.9, 1],
              }}
              className=""
            >
              <Image
                src={"./logo/unfilled-white/medium-candle.svg"}
                alt=""
                className="w-[3.2em] h-fit"
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-0"
          >
            <Image
              src={"./logo/unfilled-white/large-candle.svg"}
              alt=""
              className="w-[3.2em] h-fit"
              width={1000}
              height={1000}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1.5 }}
        className={`absolute left-[45%] top-[50%] -translate-y-[50%] text-9xl text-neutral-50 ${font.className} `}
      >
        Candle King
      </motion.div>
    </motion.div>
  );
}
