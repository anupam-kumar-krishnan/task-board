import { Button } from "@/components/ui/button";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { SortingDropDown } from "../../drop-downs/sorting-drop-down";

export default function ProjectsAreaHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <span className="text-2xl font-bold">Projects</span>
      </div>
      <div className="flex items-center ga-2">
        <div className="flex items-center gap-1">
          <MdOutlineSortByAlpha className="text-xl text-gray-500" />
          <span className="text-gray-500 text-sm">Sort</span>
        </div>
        <SortingDropDown />
        <Button className="rounded-3xl px-4">Add Task</Button>
      </div>
    </div>
  );
}
