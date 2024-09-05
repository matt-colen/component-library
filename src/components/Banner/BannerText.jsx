import { useContext } from "react";
import { BannerContext } from "./Banner";

export default function BannerText({ title, children }) {
  const { titleColor, txtColor } = useContext(BannerContext);

  const titleStyles = {
    color: titleColor,
  };

  const txtStyles = {
    color: txtColor,
  };

  return (
    <div className="banner-txt grid">
      <h4 style={titleStyles} className="banner-title">
        {title}
      </h4>
      <div style={txtStyles} className="banner-content">
        {children}
      </div>
    </div>
  );
}
