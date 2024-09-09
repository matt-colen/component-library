import Badges from "./index";
import { nanoid } from "nanoid";

export default function BadgeRow({ style = "square" }) {
  const badgeColors = [
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
        {badgeColors.map((color) => (
          <Badges.Badge key={nanoid()} color={color} style={style}>
            Badge
          </Badges.Badge>
        ))}
      </div>
    </>
  );
}
