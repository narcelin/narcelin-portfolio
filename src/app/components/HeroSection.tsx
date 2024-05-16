"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="lg:py-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            <div>Hi my name is Nicolas</div>
            <div className="min-h-16 sm:min-h-32 md:min-h-32 xl:min-h-16">
              <TypeAnimation
                // preRenderFirstString={true}
                sequence={["Project Manager", 2000, "Software Developer", 2000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "", display: "inline-black" }}
                // repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-pText  sm:text-lg lg:text-xl mb-6">
            Experienced Project Manager with a demonstrated history of working
            in the construction industry.
          </p>
          <div className="flex justify-center lg:justify-normal">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black mt-3">
              <a href="/pdfs/Arcelin_Nicolas_Resume.pdf" target="_blank">
                Hire me
              </a>
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border botder-white mt-3">
              <a
                href="/pdfs/Arcelin_Nicolas_Resume.pdf"
                download="arcelin_nicolas_cv.pdf"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center sm:place-self-auto mt-4 lg:mt-0">
          <div className="relative rounded-full bg-{#181818}  h-[250px] w-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/computer-and-people.svg"
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
