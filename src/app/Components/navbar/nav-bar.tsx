"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import SearchBar from "./search-bar";
import { ModeToggle } from "@/app/mode-toggle";
import AppNameAndLogo from "./logo-app";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-200";

  return (
    <div className={`${bgColor} poppins p-6 flex justify-between items-center`}>
      <div className={`${bgColor} flex items-center gap-16`}>
        <AppNameAndLogo />
        <SearchBar />
      </div>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Separator orientation="vertical" className="h-5 w-[2px] bg-gray-500" />
        <Button className="rounded-3xl h-10 shadow-none">
          Add New Project
        </Button>
      </div>
    </div>
  );
}
