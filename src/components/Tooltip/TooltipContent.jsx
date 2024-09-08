export default function TooltipContent({ children, header }) {
  return (
    <div className="tooltip-content">
      <h4 className="tooltip-header">{header}</h4>
      {children}
    </div>
  );
}
