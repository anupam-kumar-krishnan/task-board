import { Card } from "@/components/ui/card";
import ProjectAreaHeader from "./project-area-header/project-area-header";
import ProjectAreaBoards from "./project-area-tasks-board/project-area-boards";

export default function ProjectArea() {
  return (
    <Card className="shadow-none p-7 rounded-3xl px-7 flex flex-col gap-8">
      <ProjectAreaHeader />
      <ProjectAreaBoards />
    </Card>
  );
}
