import { useContext } from "react";
import { BannerContext } from "./Banner";

export default function BannerText({ title, children }) {
  const { titleColor, txtColor, header } = useContext(BannerContext);

  const titleStyles = {
    color: titleColor,
  };

  const txtStyles = {
    color: txtColor,
  };

  return (
    <div className="banner-txt grid">
      <h4 style={titleStyles} className="banner-title">
        {title || header}
      </h4>
      <div style={txtStyles} className="banner-content">
        {children}
      </div>
    </div>
  );
}
