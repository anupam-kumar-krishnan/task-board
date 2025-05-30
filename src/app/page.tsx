"use client";

import { useTheme } from "next-themes";
import Navbar from "./Components/navbar/nav-bar";
import ProjectArea from "./Components/projects-area/project-area";
import RightSideBar from "./Components/right-side-bar/right-side-bar";

export default function Home() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-200";

  return (
    <div className={`${bgColor} border min-h-screen w-full`}>
      <Navbar />
      <div
        className={`${bgColor} grid grid-cols-[3fr_1fr] px-6 mt-8 poppins gap-4`}
      >
        <ProjectArea />
        <RightSideBar />
      </div>
    </div>
  );
}
