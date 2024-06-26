import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardInterface {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

export default function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardInterface) {
  return (
    <div className="flex content-end justify-end items-end">
      <div
        className="max-w-sm h-52 md:h-72 content-end rounded-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            target="_Blank"
            href={previewUrl}
            className="h-14 w-14 mr-3 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            target="_Blank"
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
        <div className="rounded-b-xl bg-[#181818] opacity-85 py-6 px-4">
          <h5 className="font-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </div>
  );
}
