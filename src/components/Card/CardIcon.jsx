import uploadIcon from "../../assets/icons/upload.svg";

export default function CardIcon({
  icon = uploadIcon,
  alt = "Upload icon",
  bgColor = "#3F75FE",
}) {
  const styles = {
    background: bgColor,
  };

  return (
    <div style={styles} className="card-icon flex">
      <img src={icon} alt={alt} />
    </div>
  );
}
