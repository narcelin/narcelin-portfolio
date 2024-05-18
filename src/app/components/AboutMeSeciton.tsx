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
        <li>{`Civil Engineering (FGCU - 2022)`}</li>
        <li>{`Environmental Engineering (FGCU - 2022)`}</li>
        <li>{`Computer Science (FAU - In-Progress)`}</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="min-h-40  list-disc pl-2 text-pText">
        <li>{`Civil Engineer Intern (Kimley Horn)`}</li>
        <li>{`Field Engineer (Manhattan Construction)`}</li>
        <li>{`Assisten Project Manager (ECS)`}</li>
        <li>{`Project Manager & Production Manager (Classic Brass Works)`}</li>
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
          <p className="text-pText md:text-md">
            {`Well, hello there, and welcome to my portfolio! I'm Nicolas Arcelin Ovando, a dedicated Project Manager with a passion for solving problems. With over 4 years of hands-on experience in project management in engineering. I've had the privilege of spearheading impactful projects where I've embraced opportunities for teaching and continuous learning. My journey has given me the skills to navigate complex situations and deliver results. Whether it's coordinating tasks, managing resources, or ensuring seamless communication between all stakeholders. I thrive in a dynamic environment where challenges are met with innovative ideas. One of my greatest strengths is my ability to connect with clients on a personal level, understanding their needs, and translating them into actionable plans. I take pride in fostering strong client relationships built on trust, effective communication, and understanding. I encourage you to explore the projects I've been involved in. Feel free to reach out!`}
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
