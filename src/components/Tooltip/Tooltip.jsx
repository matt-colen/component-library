import { useState, createContext } from "react";

const TooltipContext = createContext();

export default function Tooltip({ children, baseColor, style }) {
  const [on, setOn] = useState(true);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };

  return (
    <TooltipContext.Provider value={{ toggle }}>
      {on && (
        <div className={`${baseColor} ${style} tooltip flex`}>
          {children}
          <span className="polygon"></span>
        </div>
      )}
    </TooltipContext.Provider>
  );
}

export { TooltipContext };
