import quotationMarkIcon from "../../assets/icons/quotation-marks.svg";

export default function TestimonialText({ children, name, workDetails }) {
  return (
    <div className="testimonial-txt">
      <img src={quotationMarkIcon} alt="Quotation mark icon" />
      <blockquote className="quote">{children}</blockquote>
      <div className="quote-detail quote-author">{name}</div>
      <div className="quote-detail quote-work-details">{workDetails}</div>
    </div>
  );
}
