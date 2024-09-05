import Badge from "../Badge/Badge";

export default function BadgeRow({ style = "square" }) {
  const pillColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  return (
    <>
      <h3 className="type-header">{style}</h3>
      <div className="badge-container grid">
        {pillColors.map((color) => (
          <Badge key={color} color={color} style={style}>
            Badge
          </Badge>
        ))}
      </div>
    </>
  );
}
