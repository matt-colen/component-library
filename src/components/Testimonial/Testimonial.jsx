export default function Testimonial({ children, bgColor }) {
  const styles = {
    background: bgColor,
  };

  return (
    <div style={styles} className="testimonial grid">
      {children}
    </div>
  );
}
