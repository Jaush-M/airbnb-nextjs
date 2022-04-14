import Image from "next/image";
import styles from "./banner.module.scss";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className={`${styles["banner"]}`}>
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />

      <div className={`${styles["banner-content"]}`}>
        <p>Not sure where to go? Perfect.</p>
        <button>I'm flexible</button>
      </div>
    </div>
  );
};

export default Banner;
