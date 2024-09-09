import { createContext } from "react";
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
      <div style={styles} className="toast flex">
        {children}
      </div>
    </ToastContext.Provider>
  );
}

export { ToastContext };
