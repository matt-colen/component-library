import { useContext } from "react";
import { TestimonialContext } from "./Testimonial";

export default function TestimonialImg() {
  const { img, alt } = useContext(TestimonialContext);

  return img ? <img className="testimonial-img" src={img} alt={alt} /> : null;
}
