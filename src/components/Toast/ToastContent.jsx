import { useContext } from "react";
import { ToastContext } from "./Toast";

export default function ToastContent({ children, title }) {
  const { header, txtColor, titleColor } = useContext(ToastContext);

  const headerStyles = {
    color: titleColor,
  };

  const txtStyles = {
    color: txtColor,
  };

  return (
    <div style={txtStyles} className="toast-content">
      <h4 style={headerStyles} className="toast-title">
        {title || header}
      </h4>
      {children}
    </div>
  );
}
