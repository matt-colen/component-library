import { createContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import getToastStyles from "../../helpers/getToastStyles";

const ToastContext = createContext();

export default function Toast({ children, type, show, duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(show);
  const [icon, titleColor, txtColor, bannerColor, header] =
    getToastStyles(type);

  useEffect(() => {
    let timer;
    if (show) {
      setIsVisible(true); // Show the toast when the `show` prop is true
      timer = setTimeout(() => {
        setIsVisible(false); // Hide after the duration
      }, duration);
    } else {
      setIsVisible(false); // Ensure it's hidden if `show` becomes false
    }
    return () => clearTimeout(timer);
  }, [show, duration]);

  const styles = {
    background: bannerColor,
  };

  return (
    <ToastContext.Provider
      value={{ icon, titleColor, txtColor, bannerColor, header, type }}
    >
      {createPortal(
        <div style={styles} className={`toast ${isVisible ? "show" : ""} flex`}>
          {children}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export { ToastContext };
