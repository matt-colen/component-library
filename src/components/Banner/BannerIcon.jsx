import { useContext } from "react";
import { BannerContext } from "./Banner";

export default function BannerIcon() {
  const { icon, type } = useContext(BannerContext);

  return (
    <div className="banner-icon">
      <img src={icon} alt={`${type} icon`} />
    </div>
  );
}
