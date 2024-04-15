import React from "react";
import styles from "./../styles/References.module.css";

const References = () => {
  return (
    <div className={styles.references}>
      <h2>References</h2>
      <ul>
        <li>
          <p className={styles.overflow}>
            <a
              href="https://www.healthline.com/nutrition/quercetin#what-it-is"
              target="__blank"
            >
              https://www.healthline.com/nutrition/quercetin#what-it-is
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default References;
