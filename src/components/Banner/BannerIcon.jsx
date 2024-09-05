import { useContext } from "react";
import { BannerContext } from "./Banner";

export default function BannerIcon() {
  const { icon } = useContext(BannerContext);

  return (
    <div className="banner-icon">
      <img src={icon} alt="" />
    </div>
  );
}
