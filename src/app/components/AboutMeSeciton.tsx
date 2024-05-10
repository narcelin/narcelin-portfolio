"use client";

import Image from "next/image";
import TabButton from "./TabButton";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>C++</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>FGCU</li>
        <li>FAU</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Manhattan Construction</li>
        <li>Classic Brass Works</li>
      </ul>
    ),
  },
];

export default function AboutMeSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="image" src="/test_image.jpg" width={500} height={500} />
        <div>
          <h2 className="sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
            quas obcaecati? Neque quia, optio sapiente modi totam voluptatem
            earum, quas dicta similique culpa delectus eaque adipisci minus
            aliquam ad!
          </p>
          <div className="flex flex-row mt-8">
            <button onClick={() => handleTabChange("skills")}>
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
            </button>
            <button onClick={() => handleTabChange("education")}>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
            </button>
            <button onClick={() => handleTabChange("experience")}>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </button>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
