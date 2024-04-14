import styles from "./../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.first}>
        About
      </Link>
      <Link to="/health_benefits">
        Health Benefits
      </Link>
      <Link to="/references">
        References
      </Link>
    </div>
  );
};

export default Navbar;
