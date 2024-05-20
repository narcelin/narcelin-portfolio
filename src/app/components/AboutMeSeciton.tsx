"use client";

import Image from "next/image";
import TabButton from "./TabButton";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="min-h-40 list-disc pl-2 text-pText">
        <li>Node.js</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>C++</li>
        <li>Java</li>
        <li>And more...</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="min-h-40  list-disc pl-2 text-pText">
        <li>{`Computer Science (FAU - In-Progress)`}</li>
        <li>{`Civil Engineering (FGCU - 2022)`}</li>
        <li>{`Environmental Engineering (FGCU - 2022)`}</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="min-h-40  list-disc pl-2 text-pText">
        <li>{`Project Manager & Production Manager (Classic Brass Works)`}</li>
        <li>{`Assisten Project Manager (ECS)`}</li>
        <li>{`Field Engineer (Manhattan Construction)`}</li>
        <li>{`Civil Engineer Intern (Kimley Horn)`}</li>
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
    <section id="about">
      <div className="xl:grid xl:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-2xl"
          alt="image"
          src="/images/businessImg.jpg"
          width={500}
          height={500}
        />
        <div>
          <h2 className="sm:text-4xl font-bold my-4 text-heading">About Me</h2>
          <div className="text-pText md:text-md">
            <p className="mb-5">
              {`Welcome to my corner of the web! 🌟 I'm Nicolas Arcelin Ovando, a dedicated Project Manager with a passion for solving problems.`}
            </p>
            <p className="mb-5">
              {`I have over 4 years of hands-on project management experience in engineering, spearheading impactful projects that have allowed me to embrace opportunities for teaching and continuous learning.`}
            </p>
            <p className="mb-5">
              {`Throughout my journey, I've honed my skills to navigate complex situations and deliver results. Whether it's coordinating tasks, managing resources, or ensuring seamless communication between all stakeholders, I thrive in dynamic environments where challenges are met with innovative ideas.`}
            </p>
            <p className="mb-5">
              {`One of my greatest strengths lies in my ability to connect with clients on a personal level. Understanding their needs and translating them into actionable plans is paramount. I take pride in fostering strong client relationships built on trust, effective communication, and understanding.`}
            </p>
            <p className="mb-5">
              {`I encourage you to explore the projects I've been involved in, and feel free to reach out with any inquiries!`}
            </p>
          </div>
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
