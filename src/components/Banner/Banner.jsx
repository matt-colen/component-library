import { createContext } from "react";
import getBannerStyles from "../../helpers/getBannerStyles";

const BannerContext = createContext();

export default function Banner({ children, type }) {
  const [icon, titleColor, txtColor, bannerColor, header] =
    getBannerStyles(type);

  const bannerStyles = {
    background: bannerColor,
  };

  return (
    <BannerContext.Provider
      value={{ icon, titleColor, txtColor, type, header }}
    >
      <div style={bannerStyles} className="banner grid">
        {children}
      </div>
    </BannerContext.Provider>
  );
}

export { BannerContext };
