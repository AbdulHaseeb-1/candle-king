"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

// Font files can be colocated inside of `pages`

export default function WICK() {
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
    triggerOnce: true, // Ensure it triggers only once
  });

  React.useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <motion.div ref={ref}>
      <main className="grid  content-center relative transition-all overflow-hidden pb-20 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-2xl sm:text-5xl lg:text-6xl w-full font-bold text-center text-white">
            Who is CANDLE KING?
          </h1>
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="container mx-auto px-4 lg:px-9 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10"
        >
          {/* Text Content */}
          {startAnimation && (
            <div className="w-full space-y-4 md:space-y-6 mb-12 lg:mb-0">
              <h1 className="text-4xl text-sky-500 md:text-7xl font-bold leading-tight relative ">
                <TypeAnimation
                  sequence={[
                    100,
                    "Peyush Sharma", // initially rendered starting point
                  ]}
                  cursor={false}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />{" "}
              </h1>
              <div>
                <p className="text-sm lg:pr-20 md:text-2xl -translate-y-4 font-light text-neutral-100 ">
                  <TypeAnimation
                    sequence={[
                      2000,
                      "Patience in trading means waiting for quality setups, avoiding impulsive decisions, and sticking to your strategy. It’s key to consistent and sustainable success.Rushing trades often leads to losses, while patience helps you capitalize on high-probability opportunities. The market rewards discipline, not haste.F", // initially rendered starting point
                    ]}
                    cursor={false}
                    speed={80}
                    // style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />{" "}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-4 text-white">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="flex items-center rounded-lg space-x-2 py-2 px-2 md:px-4 md:py-3rounded-lg border "
                >
                  <GraduationCap className="w-5 h-5 font-bold  text-[#ff7301]  " />
                  <span className="text-sm lg:text-lg  font-medium ">Chart Analyst</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="flex items-center space-x-2  border px-2 py-2 md:px-4 md:py-3 rounded-lg"
                >
                  <Briefcase className="w-5 h-5 text-[#5a02ff] " />
                  <span className="text-sm md:text-lg  ">
                    5+ Years Experience
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="flex items-center space-x-2 px-2 py-2 md:px-4 md:py-3 rounded-lg  border "
                >
                  <GraduationCap className="w-5 h-5 font-bold  text-[#a50000]  " />
                  <span className="text-sm lg:text-lg  font-medium ">The Candle King</span>
                </motion.div>
              </div>
              {/* <button className="px-8 py-3 bg-[#FFB200] text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300">
              Lets Connect
              </button> */}
            </div>
          )}

          {/* Image Circle */}
          {startAnimation && (
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <div className="absolute left-1/2 top-32 md:top-40 -translate-x-1/2 w-20 h-20 bg-none s z-20 shadow-[0px_1px_150px_50px_white] md:shadow-[0px_1px_150px_90px_white] rotate-180"></div>
              <div
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]  bg-transparent rounded-full overflow-hidden z-50"
                // style={{ boxShadow: "1px 1px 50px white" }}
              >
                <Image
                  src="/images/PS.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover p-5"
                  priority
                />
              </div>
              {/* /   Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-[20px] h-[20px] rounded-full bg-white"></div>
              <div className="absolute -bottom-4 -left-4 w-[20px] h-[20px] rounded-full bg-white"></div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </motion.div>
  );
}
