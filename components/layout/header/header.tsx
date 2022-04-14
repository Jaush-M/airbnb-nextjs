import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import styles from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={`${styles["header"]}`}>
      {/* Left */}
      <div className={`${styles["header-logo"]}`}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div className={`${styles["header-search"]}`}>
        <input type="text" placeholder="Start your search" />
        <SearchIcon />
      </div>

      {/* Right */}
      <div className={`${styles["header-container"]}`}>
        <div className={`${styles["header-container-host"]}`}>
          <p>Become a host</p>
          <GlobeAltIcon />
        </div>

        <div className={`${styles["header-container-menu"]}`}>
          <MenuIcon />
          <UserCircleIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
