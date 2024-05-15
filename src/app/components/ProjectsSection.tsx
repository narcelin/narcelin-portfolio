"use client";

import { randomUUID } from "crypto";
import ProjectCard from "./ProjectsCard";
import { useState } from "react";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Projects 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, itaque.",
    imgUrl: "/test_image.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/narcelin/portfolio_app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Projects 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, itaque.",
    imgUrl: "/test_image.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Projects 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, itaque.",
    imgUrl: "/test_image.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Projects 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, itaque.",
    imgUrl: "/test_image.jpg",
    tag: ["All", "Websites"],
    gitUrl: "/",
    previewUrl: "/",
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
      </div>
      <div className="flex flex-col justify-between gap-5 sm:grid grid-cols-3">
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
