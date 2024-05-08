"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div>Hello my name is Nicolas</div>
            <TypeAnimation
              sequence={["Project Manager", 2000, "Software Developer", 2000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-black" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base  sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            inventore minima voluptate ut numquam harum hic provident quam.
          </p>
          <div className="flex justify-center lg:justify-normal">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black mt-3">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border botder-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative rounded-full bg-{#181818}  h-[250px] w-[250px] lg:w-[400px] lg:h-[400px] border border-red-500">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/hero-image.png"
              alt="Icon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
