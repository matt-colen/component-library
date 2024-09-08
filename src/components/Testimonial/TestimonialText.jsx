import { useContext } from "react";
import { TestimonialContext } from "./Testimonial";
import quotationMarkIcon from "../../assets/icons/quotation-marks.svg";

export default function TestimonialText({ children, name, workDetails }) {
  const { img } = useContext(TestimonialContext);

  return (
    <div className="testimonial-txt">
      {img && <img src={quotationMarkIcon} alt="Quotation mark icon" />}
      <blockquote className="quote">{img ? children : `"${children}"`}</blockquote>
      <div className="quote-detail quote-author">{name}</div>
      <div className="quote-detail quote-work-details">{workDetails}</div>
    </div>
  );
}
