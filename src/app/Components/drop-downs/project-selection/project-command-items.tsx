import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Project, projects } from "./project-selection";
import { SingleProjectCommandItem } from "./singleProjectItem";
import { Dispatch, SetStateAction } from "react";

export default function ProjectCommandItems({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project>>;
}) {
  function handleProjectSelect(project: Project) {
    setSelectedProject(project);
  }
  return (
    <Command>
      <CommandInput placeholder="Search a Project..." />
      <CommandList className="my-3">
        <CommandEmpty>No results found.</CommandEmpty>
      </CommandList>
      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <SingleProjectCommandItem
            project={project}
            key={index}
            onSelectedItem={handleProjectSelect}
            isSelected={selectedProject.name === project.name}
          />
        ))}
      </div>
    </Command>
  );
}
