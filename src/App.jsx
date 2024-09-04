import "./App.css";
import Badge from "./components/Badge/Badge";

export default function App() {
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
    <main className="container grid">
      <h1 className="title">React Component Library</h1>
      <section className="badges grid" id="badges">
        <h2>Badges</h2>
        <h3 className="type-header">Squared</h3>
        <div className="badge-container grid">
          {pillColors.map((color) => (
            <Badge key={color} color={color}>
              Badge
            </Badge>
          ))}
        </div>
        <h3 className="type-header">Pill</h3>
        <div className="badge-container grid">
          {pillColors.map((color) => (
            <Badge key={color} color={color} style="pill">
              Badge
            </Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
