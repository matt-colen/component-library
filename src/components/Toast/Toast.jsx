import { createContext } from "react";
import { createPortal } from "react-dom";
import getToastStyles from "../../helpers/getToastStyles";

const ToastContext = createContext();

export default function Toast({ children, type }) {
  const [icon, titleColor, txtColor, bannerColor, header] =
    getToastStyles(type);

  const styles = {
    background: bannerColor,
  };

  return (
    <ToastContext.Provider
      value={{ icon, titleColor, txtColor, bannerColor, header, type }}
    >
      {createPortal(
        <div style={styles} className={`toast show flex`}>
          {children}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export { ToastContext };
