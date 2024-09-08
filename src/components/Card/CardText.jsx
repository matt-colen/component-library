export default function CardText({ header, children }) {
  return (
    <div className="card-txt grid">
      <h4 className="card-header">{header}</h4>
      {children}
    </div>
  );
}
