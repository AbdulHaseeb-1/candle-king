import Image from "next/image";
import React from "react";

const MirrorMarketConcept = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-10 py-12 bg-neutral-950 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
        The Mirror Market Concept
      </h1>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-6xl mx-auto">
        <div className="lg:w-3/5 space-y-4">
          <div className="relative">
            <span className="text-6xl md:text-8xl lg:text-9xl text-sky-500 font-bold float-left mr-4 leading-none">
              MMC
            </span>
            <p className="text-md md:text-lg leading-relaxed">
              using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here, content here, making it
              look like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text. using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here, content here, making it
              look like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>

        <div className="lg:w-2/5 flex justify-center">
          <div className="bg-neutral-950 rounded-full p-4 w-fit h-fit">
            <Image
              className="w-64 h-64 md:w-80 md:h-80 object-cover  "
              src="/images/mmc-animate.gif"
              alt="Mirror Market Concept Animation"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MirrorMarketConcept;