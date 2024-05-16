"use client";

import { randomUUID } from "crypto";
import ProjectCard from "./ProjectsCard";
import { useState } from "react";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio",
    description: "NextJS along with Tailwindcss and other libraries.",
    imgUrl: "/images/portfolioProjectPrev.png",
    tag: ["All", "Websites"],
    gitUrl: "https://github.com/narcelin/portfolio_app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dashboard Project",
    description:
      "Linked supabase (backend database) with a front end dashboard using NextJS.",
    imgUrl: "/images/businessDashboardProject.png",
    tag: ["All", "Websites"],
    gitUrl: "https://github.com/narcelin/fau_FoodPurchasingApp",
    previewUrl: "https://github.com/narcelin/fau_FoodPurchasingApp",
  },
  {
    id: 3,
    title: "Data Structures and Algorithm Projects Using C++",
    description: "Doubly linked lists, queues, stacks, and more",
    imgUrl: "/images/dataStructPrev.png",
    tag: ["All", "CLI"],
    gitUrl: "https://github.com/narcelin/cpp_datastructures",
    previewUrl: "https://github.com/narcelin/cpp_datastructures",
  },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");

  return (
    <section id="projects">
      <h2 className="flex justify-center text-4xl font-bold mb-3">Projects</h2>
      <div className="flex flex-row justify-center items-center gap-4 py-3">
        <button
          className={`text-xl border-2  hover:text-white hover:border-white rounded-full py-1 px-5 ${
            tag === "All"
              ? "text-white border-white"
              : "text-[#ADB7BE] border-[#ADB7BE]"
          }`}
          onClick={() => setTag("All")}
        >
          All
        </button>
        <button
          className={`text-xl border-2  hover:text-white hover:border-white rounded-full py-1 px-5 ${
            tag === "Websites"
              ? "text-white border-white"
              : "text-[#ADB7BE] border-[#ADB7BE]"
          }`}
          onClick={() => setTag("Websites")}
        >
          Websites
        </button>
        <button
          className={`text-xl border-2  hover:text-white hover:border-white rounded-full py-1 px-5 ${
            tag === "Websites"
              ? "text-white border-white"
              : "text-[#ADB7BE] border-[#ADB7BE]"
          }`}
          onClick={() => setTag("CLI")}
        >
          CLI
        </button>
      </div>
      <div className="flex flex-col items-center :justify-between gap-5 xl:grid grid-cols-3">
        {PROJECTS_DATA.map((project) =>
          project.tag.includes(tag) ? (
            <ProjectCard
              key={project.id}
              description={project.description}
              imgUrl={project.imgUrl}
              title={project.title}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ) : null
        )}
        {/* {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            description={project.description}
            imgUrl={project.imgUrl}
            title={project.title}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))} */}
      </div>
    </section>
  );
}
