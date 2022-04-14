import styles from "./container.module.scss";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main className={`${styles["container"]}`}>{children}</main>;
};

export default Container;
