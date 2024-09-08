import { FaArchive } from "react-icons/fa";

export default function TooltipIcon({ children = <FaArchive /> }) {
  return <div className="tooltip-icon">{children}</div>;
}
