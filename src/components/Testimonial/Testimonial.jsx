import { createContext } from "react";

const TestimonialContext = createContext();

export default function Testimonial({ children, bgColor, img, alt }) {
  const styles = {
    background: bgColor,
  };

  return (
    <TestimonialContext.Provider value={{ img, alt }}>
      <div style={styles} className={`${!img && "no-img"} testimonial grid`}>
        {children}
      </div>
    </TestimonialContext.Provider>
  );
}

export { TestimonialContext };
