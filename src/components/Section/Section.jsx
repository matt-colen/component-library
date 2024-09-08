export default function Section({ header, children }) {
  return (
    <section className="section grid">
      <h2>{header}</h2>
      {children}
    </section>
  );
}
