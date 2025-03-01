"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const king = localFont({
  src: "./fonts/Agdasima,Geist_Mono/Geist_Mono/static/GeistMono-Bold.ttf",
});

export default function Hero() {
  return (
    <motion.div>
      <main className="grid py-0 content-center relative transition-all ">
        {/* Content Container */}
        <div className="container mx-auto px-4 lg:px-9 py-20 flex flex-col lg:flex-row  justify-between relative z-10">
          {/* Text Content */}
          <div className="lg:w-full space-y-6  my-auto">
            <h1 className="text-4xl text-sky-500 md:text-6xl  relative ">
              <TypeAnimation
                sequence={[
                  100,
                  "I am", // initially rendered starting point
                ]}
                cursor={false}
                repeat={Infinity}
              />
              <span
                className={` relative w-full  text-white   bg-transparent ${king.className}`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1 }}
                >
               
                    <Image
                      className="absolute top-0 right-16 md:right-[83px] md:top-8 w-12 h-12"
                      src={"/logos/king-hat-light.svg"}
                      width={100}
                      height={100}
                      alt="king"
                    />
                
                </motion.span>
                <br className="" />
                <TypeAnimation
                  sequence={[
                    500,
                    "Adeesh", // initially rendered starting point
                    "CANDLE KING", // initially rendered starting point
                  ]}
                  cursor={false}
                  speed={1}
                  className="text-5xl md:text-7xl"
                />

                <span className=" absolute text-nowrap   left-0  md:left-20 -bottom-6 lg:left-20  lg:-bottom-6 text-xl md:text-2xl lg:text-3xl  font-bold text-sky-500">
                  <TypeAnimation
                    sequence={[
                      3000,
                      "The King of Reversals", // initially rendered starting point
                    ]}
                    speed={30}
                    cursor={false}
                  />
                </span>
              </span>

              {/* Text */}
            </h1>
            <p className="text-md  text-start md:text-xl -translate-y-4 font-light text-neutral-200 ">
              {/* <TypeAnimation
                sequence={[
                  5000,
                  "I am a chart analyst and mentor, the analyst and ", // initially rendered starting point
                ]}
                cursor={false}
                speed={80}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />{" "} */}
              <br  className=""/>
              <TypeAnimation
                sequence={[
                  4000,
                  "I am a chart analyst and a mentor, I do it because i love it . I am a chart analyst and a mentor, I do it because i love it I am a chart analyst and a mentor, I do it because i love it . I am a chart analyst and a mentor, I do it because i love it", // initially rendered starting point
                ]}
                cursor={false}
                speed={90}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />{" "}
            </p>

            <div className="flex flex-wrap gap-3 text-white pb-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 6 }}
                className="flex items-center rounded-lg space-x-2 py-2 px-2 md:px-4 md:py-3rounded-lg border "
              >
                <Briefcase className="w-5 h-5 text-[#5a02ff] " />
                <span className="text-sm lg:text-lg  font-medium ">
                 Mentor
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 6.2 }}
                className="flex items-center rounded-lg space-x-2 py-2 px-2 md:px-4 md:py-3rounded-lg border "
              >
                <Briefcase className="w-5 h-5 text-[#7e4d03] " />
                <span className="text-sm lg:text-lg  font-medium ">
                 Streamer
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 6.4 }}
                className="flex items-center rounded-lg space-x-2 py-2 px-2 md:px-4 md:py-3rounded-lg border  "
              >
                <GraduationCap className="w-5 h-5 font-bold  text-[#006d6d]  " />
                <span className="text-sm lg:text-lg  font-medium ">1000+ Students</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 6.8 }}
                className="flex items-center rounded-lg space-x-2 py-2 px-2 md:px-4 md:py-3rounded-lg border "
              >
                <GraduationCap className="w-5 h-5 font-bold  text-[#a50000]  " />
                <span className="text-sm lg:text-lg  font-medium ">Creator of MMC</span>
              </motion.div>
            </div>
            {/* <button className="px-8 py-3 bg-[#FFB200] text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300">
              Lets Connect
            </button> */}
          </div>

          {/* Image Circle */}
          <motion.div
            className="relative w-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="relative  h-[300px]  md:h-[400px]  bg-transparent "
              // style={{ boxShadow: "1px 1px 50px white" }}
            >
              <div className="absolute left-1/2 top-20 -translate-x-1/2 w-10 h-10 bg-none rounded-full z-20 shadow-[0px_0px_180px_40px_white] rotate-180"></div>

              <Image
                src="/logos/ck-dark.svg"
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-full object-center  p-5"
                priority
              />
            </div>
            {/* /   Decorative Elements */}
            {/* <div className="absolute -top-4 -right-4 w-[20px] h-[20px] rounded-full bg-white"></div> */}
            {/* <div className="absolute -bottom-4 -left-4 w-[20px] h-[20px] rounded-full bg-white"></div> */}
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
