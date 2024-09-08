import checkIcon from "../assets/icons/check.svg";
import exclamationIcon from "../assets/icons/exclamation.svg";
import xCircleIcon from "../assets/icons/x-circle.svg";
import infoIcon from "../assets/icons/info.svg";

const getBannerStyles = (type) => {
  let icon;
  let titleColor;
  let txtColor;
  let bannerColor;
  let header;

  switch (type) {
    case "success":
      icon = checkIcon;
      titleColor = "#065F46";
      txtColor = "#047857";
      bannerColor = "#ECFDF5";
      header = "Congratulations";
      break;
    case "warning":
      icon = exclamationIcon;
      titleColor = "#92400E";
      txtColor = "#B45309";
      bannerColor = "#FFFBEB";
      header = "Attention";
      break;
    case "error":
      icon = xCircleIcon;
      titleColor = "#92400E";
      txtColor = "#B45309";
      bannerColor = "#FEF2F2";
      header = "There is a problem with your application";
      break;
    default:
      icon = infoIcon;
      titleColor = "#1E40AF";
      txtColor = "#1C51B9";
      bannerColor = "#EFF6FF";
      header = "Update available";
  }

  return [icon, titleColor, txtColor, bannerColor, header];
};

export default getBannerStyles;
