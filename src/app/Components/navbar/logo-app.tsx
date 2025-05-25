import { FaProjectDiagram } from "react-icons/fa";

export default function AppNameAndLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary size-10 text-lg text-white rounded-xl flex justify-center items-center">
        <FaProjectDiagram />
      </div>
      <div className="flex gap-1 items-center text-xl">
        <a target="#">
          <span className="text-xl font-bold">KanBan</span>
        </a>
        <a target="#">
          <span className="text-xl">Board</span>
        </a>
      </div>
    </div>
  );
}
