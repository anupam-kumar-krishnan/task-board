import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import TasksDropDown from "../../drop-downs/task-drop-down";

export default function SingleTask() {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <div className="p-1 py-[4px] bg-green-500/15 rounded-3xl px-2 pr-4 font-medium text-green-900 flex items-center gap-1 text-sm">
            <MdKeyboardDoubleArrowDown className="mb-[2px]" />
            <span className="text-[12px]">Low</span>
          </div>
          <TasksDropDown />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 mt-1">
        <span className="font-bold text-lg">Copywriting Content</span>
        <span className="font-sm text-gray-600">
          Create content for a client today eery day
        </span>
      </CardContent>
    </Card>
  );
}
