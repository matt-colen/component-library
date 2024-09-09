import checkIcon from "../assets/icons/check-circle.svg";
import exclamationIcon from "../assets/icons/exclamation-circle.svg";
import xCircleIcon from "../assets/icons/x-circle-2.svg";
import infoIcon from "../assets/icons/info-circle.svg";

const getToastStyles = (type) => {
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
      header = "Success";
      break;
    case "warning":
      icon = exclamationIcon;
      titleColor = "#92400E";
      txtColor = "#B45309";
      bannerColor = "#FFFBEB";
      header = "Warning";
      break;
    case "error":
      icon = xCircleIcon;
      titleColor = "#92400E";
      txtColor = "#B45309";
      bannerColor = "#FEF2F2";
      header = "Error";
      break;
    default:
      icon = infoIcon;
      titleColor = "#1E40AF";
      txtColor = "#1C51B9";
      bannerColor = "#EFF6FF";
      header = "Information";
  }

  return [icon, titleColor, txtColor, bannerColor, header];
};

export default getToastStyles;
