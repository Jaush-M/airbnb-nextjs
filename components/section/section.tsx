import styles from "./section.module.scss";

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={`${styles["section"]}`}>
      <h2 className={`${styles["section-title"]}`}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
