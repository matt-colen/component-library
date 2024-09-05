const getBadgeColorScheme = (color) => {
  let txtColor;
  let badgeColor;

  switch (color) {
    case "red":
      txtColor = "#991B1B";
      badgeColor = "#FEE2E2";
      break;
    case "yellow":
      txtColor = "#92400E";
      badgeColor = "#FEF3C7";
      break;
    case "green":
      txtColor = "#065F46";
      badgeColor = "#D1FAE5";
      break;
    case "blue":
      txtColor = "#1E40AF";
      badgeColor = "#DBEAFE";
      break;
    case "indigo":
      txtColor = "#3730A3";
      badgeColor = "#E0E7FF";
      break;
    case "purple":
      txtColor = "#5B21B6";
      badgeColor = "#EDE9FE";
      break;
    case "pink":
      txtColor = "#9D174D";
      badgeColor = "#FCE7F3";
      break;
    default:
      txtColor = "#1F2937";
      badgeColor = "#F3F4F6";
  }

  return [txtColor, badgeColor];
};

export default getBadgeColorScheme;
