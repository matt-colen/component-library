import Badges from "./index";

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
          <Badges.Badge key={color} color={color} style={style}>
            Badge
          </Badges.Badge>
        ))}
      </div>
    </>
  );
}
