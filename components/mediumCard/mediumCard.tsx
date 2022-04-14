import Image from "next/image";
import styles from "./mediumCard.module.scss";

interface MediumCardProps {
  img: string;
  title: string;
}

const MediumCard: React.FC<MediumCardProps> = ({ img, title }) => {
  return (
    <div className={`${styles["medium-card"]}`}>
      <div className={`${styles["medium-card-img"]}`}>
        <Image src={img} layout="fill" />
      </div>
      <h3 className={`${styles["medium-card-title"]}`}>{title}</h3>
    </div>
  );
};

export default MediumCard;
