import Image from "next/image";
import styles from "./smallCard.module.scss";

interface SmallCardProps {
  img: string;
  location: string;
  distance: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ img, location, distance }) => {
  return (
    <div className={`${styles["small-card"]}`}>
      {/* Left */}
      <div className={`${styles["small-card-img"]}`}>
        <Image src={img} layout="fill" />
      </div>

      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
