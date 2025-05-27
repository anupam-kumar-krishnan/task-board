import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

import { BiTask } from "react-icons/bi";
import { TaskName } from "../sub-components/task-name";
import { TaskDescription } from "../sub-components/task-description";
import ProjectList from "../sub-components/project-list";
import PriorityList from "../sub-components/priority-list";

export default function TaskDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-3xl px-5">Add New Task</Button>
      </DialogTrigger>
    </Dialog>
  );
}
