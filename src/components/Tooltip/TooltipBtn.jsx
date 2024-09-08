import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

export default function TooltipBtn({ children }) {
  const { toggle } = useContext(TooltipContext);

  return (
    <button onClick={toggle} className="tooltip-btn flex">
      {children}
    </button>
  );
}
