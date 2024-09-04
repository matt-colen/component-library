import getColorScheme from "../../getColorScheme";

export default function Badge({ children, color, style = "square" }) {
  const [txtColor, badgeColor] = getColorScheme(color.toLowerCase());

  const badgeStyles = {
    color: txtColor,
    background: badgeColor,
    borderRadius: style.toLowerCase() === "square" ? "4px" : "12px",
  };

  return (
    <button style={badgeStyles} className="btn badge">
      {children}
    </button>
  );
}
