import { createContext } from "react";
import getBannerColorScheme from "../../getBannerColorScheme";
const BannerContext = createContext();

export default function Banner({ children, type }) {
  const [icon, titleColor, txtColor, bannerColor] = getBannerColorScheme(type);

  const bannerStyles = {
    background: bannerColor,
  };

  return (
    <BannerContext.Provider value={{ icon, titleColor, txtColor }}>
      <div style={bannerStyles} className="banner grid">
        {children}
      </div>
    </BannerContext.Provider>
  );
}

export { BannerContext };
