import { useContext } from "react";
import { ToastContext } from "./Toast";

export default function ToastIcon({ children }) {
  const { icon, type } = useContext(ToastContext);

  return (
    <div className="toast-icon">
      <img src={icon} alt={`${type} icon`} />
    </div>
  );
}
