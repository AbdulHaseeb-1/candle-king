"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import "@/public/css/note.css";
import { InfoIcon } from "lucide-react";

export default function KnowledgeSection_() {
  const concepts = [
    {
      title: "SMC",
      name: "Smart Money Concept",
      description:
        "System Management Control is a systematic approach to managing and controlling a system. It involves the coordination of various activities and processes to ensure the smooth functioning of the system. SMC helps in identifying and resolving any issues or bottlenecks that may arise during the system's operation.",
      style: "shadow-green-500 border-green-500 text-green-400",
      connectionStyle:
        "  w-48 sm:w-72 sm:top-7 sm:rotate-[30deg] md:w-72 lg:w-72 -z-10 rotate-[35deg] md:rotate-[28deg] lg:rotate-0  lg:rotate-0 top-10  lg:-top-6 left-10 md:left-20 lg:left-28 -translate-x-8 -translate-y-1/2 bg-gradient-to-r from-green-400  to-green-50",
      color: "green-400",
      text: "text-green-400",
      bg: "bg-green-300",
      infoPosition: {
        point: "left-24 -top-[0px]",
        box: "top-[15px] -left-20",
      },
      border: "border-green-400",
      position:
        "left-10 top-16 lg:top-1/2 lg:left-1/4   -translate-x-1/2 -translate-y-1/2",
      isClicked: true,
    },
    {
      title: "SMC-Upgraded",
      name: "Inner Circle Trading",
      description:
        "System Management Control is a systematic approach to managing and controlling a system. It involves the coordination of various activities and processes to ensure the smooth functioning of the system. SMC helps in identifying and resolving any issues or bottlenecks that may arise during the system's operation.",
      style: "shadow-yellow-500 border-yellow-400 text-yellow-300",
      connectionStyle:
        "w-40 -z-10 rotate-90 left-9 md:left-12 -top-16 -translate-x-8 -translate-y-14 bg-gradient-to-l from-amber-400  to-yellow-50",
      color: "yellow-300",
      text: "text-yellow-300",
      bg: "bg-yellow-300",
      position:
        " bottom-12 lg:bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
      infoPosition: {
        point: "-left-8 top-[70px]",
        box: "-top-32 left-64",
      },
      border: "border-yellow-400",
      isClicked: true,
    },
    {
      title: "DLX",
      name: "One Line Concept",
      description:
        "System Management Control is a systematic approach to managing and controlling a system. It involves the coordination of various activities and processes to ensure the smooth functioning of the system. SMC helps in identifying and resolving any issues or bottlenecks that may arise during the system's operation.",
      style: "shadow-orange-300 border-orange-400 text-orange-300",
      connectionStyle:
        "w-48 sm:w-48 sm:right-8 sm:-rotate-[30deg] md:w-72 lg:w-72 -z-10 -rotate-[35deg] md:-rotate-[28deg] lg:-rotate-0  lg:rotate-0 top-10  md:top-7 lg:-top-6 -right-10 md:right-0 lg:right-10 -translate-x-9 -translate-y-1/2 bg-gradient-to-l from-orange-400  to-orange-50",
      color: "orange-300",
      text: "text-orange-300",
      bg: "bg-orange-300",
      position:
        "right-10 top-16 lg:top-1/2 lg:right-1/4 translate-x-1/2 -translate-y-1/2",
      infoPosition: {
        point: "left-24 top-[165px]",
        box: "-top-[280px] -left-20",
      },
      border: "border-orange-400",
      isClicked: true,
    },
    {
      title: "MMC",
      name: "Mirror Market Concept",
      description:
        "System Management Control is a systematic approach to managing and controlling a system. It involves the coordination of various activities and processes to ensure the smooth functioning of the system. SMC helps in identifying and resolving any issues or bottlenecks that may arise during the system's operation.",
      style: "shadow-purple-400 border-purple-400 text-purple-300 ",
      connectionStyle:
        "w-40 -z-10  rotate-90 -bottom-16 -translate-x-8 translate-y-full bg-gradient-to-r from-purple-400  to-purple-50",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
      color: "purple-300",
      text: "text-purple-300",
      bg: "bg-purple-300",
      infoPosition: {
        point: "left-64 top-[75px]",
        box: "-top-32 -left-[330]",
      },
      border: "border-purple-400",
      isClicked: true,
    },
    {
      title: "How?",
      description:
        "System Management Control is a systematic approach to managing and controlling a system. It involves the coordination of various activities and processes to ensure the smooth functioning of the system. SMC helps in identifying and resolving any issues or bottlenecks that may arise during the system's operation.",
      style: " text-6xl text-sky-400 border-sky-500 ",
      connectionStyle: "hidden",
      color: "white",
      bg: "bg-white",
      text: "text-white",
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      infoPosition: {
        point: "",
        box: "",
      },
      isClicked: false,
    },
  ];
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className=" py-24 px-6 top-">
      <div className="container mx-auto grid ">


        {/* Concept Cards */}
        <div className="relative h-96  gap-4 w-full ">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className={`absolute  ${concept.position}`}
              onClick={handleClick}
            >
              <div
                className={`${concept.style} shadow-2xl bg-neutral-950 text-center px-6 py-3  rounded-lg border   transition`}
              >
                <Popover>
                  <PopoverContent className=" bg-neutral-950 text-white lg:hidden p-0 border-none">
                    <div className="relative lg:hidden">
                      <div className={`z-[100] rounded-2xl`}>
                        {/* <div
                      className={`absolute rounded-md  w-8 h-8 -z-[10]  ${concept.bg} transform rotate-45 `}
                    /> */}
                        <div
                          className={`p-3  rounded-xl border ${concept.border}`}
                        >
                          <h4 className={`text-md font-bold ${concept.text} `}>
                            {concept.name}
                          </h4>
                          <p className="text-xs">{concept.description}</p>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                  <PopoverTrigger>
                    <span className=" font-semibold tracking-widest block ">
                      {concept.title}
                    </span>
                  </PopoverTrigger>
                </Popover>
              </div>
              {concept.isClicked && (
                <div className="relative hidden lg:block ">
                  <div
                    className={`absolute ${concept.infoPosition.box} h-20 w-72 translate-y-6  z-[100] rounded-2xl `}
                  >
                    <div
                      className={`absolute top-6 rounded-md ${concept.infoPosition.point} w-8 h-8 -z-[10]  ${concept.bg} transform rotate-45 translate-x-1/2 -translate-y-1/2`}
                    />
                    <div
                      className={`p-3 bg-neutral-950 text-white rounded-xl border ${concept.border}`}
                    >
                      <h4 className={`text-md font-bold ${concept.text} `}>
                        {concept.name}
                      </h4>
                      <p className="text-xs">{concept.description}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative">
                <div
                  className={`absolute h-[1px]  w-20 ${concept.connectionStyle} `}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="lg:hidden pt-10 text-center flex gap-2 justify-center">
        {" "}
        <InfoIcon /> Touch on concept to see details
      </p>
    </section>
  );
}
