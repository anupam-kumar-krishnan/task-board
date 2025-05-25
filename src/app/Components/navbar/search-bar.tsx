import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-transparent" : "bg-white";
  return (
    <div className="relative">
      <IoSearch className="absolute text-2xl left-3 top-3 text-gray-400" />
      <Input
        className={`${bgColor} rounded-3xl h-6 p-6 pl-12 shadow-none`}
        placeholder="Search..."
      />
    </div>
  );
}
