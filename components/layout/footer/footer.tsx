import { NextPage } from "next";
import styles from "./footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer className={`${styles["header"]}`}>
      <div className={`${styles["header-section"]}`}>
        <h5 className={`${styles["header-section-title"]}`}>ABOUT</h5>
        <div>Newsroom</div>
        <div>About us</div>
        <div>Learn more about our features</div>
        <div>Careers</div>
        <div>Investors</div>
      </div>

      <div className={`${styles["header-section"]}`}>
        <h5 className={`${styles["header-section-title"]}`}>COMMUNITY</h5>
        <div>Accessibility</div>
        <div>Combating descrimination</div>
        <div>Referrals link</div>
        <div>Support Afghan refugees</div>
      </div>

      <div className={`${styles["header-section"]}`}>
        <h5 className={`${styles["header-section-title"]}`}>HOST</h5>
        <div>Try hosting</div>
        <div>Explore hosting resources</div>
        <div>Visit our community forum</div>
      </div>

      <div className={`${styles["header-section"]}`}>
        <h5 className={`${styles["header-section-title"]}`}>SUPPORT</h5>
        <div>Help Centre</div>
        <div>Safety information</div>
        <div>Cancellation options</div>
        <div>Our COVID-19 Response</div>
        <div>Supporting people</div>
      </div>
    </footer>
  );
};

export default Footer;
