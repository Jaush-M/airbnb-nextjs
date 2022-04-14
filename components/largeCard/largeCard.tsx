import Image from "next/image";
import styles from "./largeCard.module.scss";

interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard: React.FC<LargeCardProps> = ({
  img,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className={`${styles["large-card"]}`}>
      <div className={`${styles["large-card-img"]}`}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>

      <div className={`${styles["large-card-description"]}`}>
        <h3>{title}</h3>
        <p>{description}</p>

        <button>{buttonText}</button>
      </div>
    </section>
  );
};

export default LargeCard;
