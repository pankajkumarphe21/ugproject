import { Outlet } from 'react-router-dom';
import img from './../images/250px-Quercetin.svg.png'
import styles from './../styles/About.module.css'

const About = () => {
  return (
    <>
    <div className={styles.about}>
      <h1>Quercetin</h1>
      <img src={img} alt="" />
      <p>
        Quercetin is a pigment that belongs to a group of plant compounds called
        flavonoids.
      </p>
      <p>Flavonoids are present in:</p>
      <ul>
        <li>Vegetables</li>
        <li>Fruits</li>
        <li>Grains</li>
        <li>Tea</li>
        <li>Wine</li>
      </ul>
      <p>They have been linked to several health benefits, including reduced risks of heart disease, cancer, and degenerative brain disorders.</p>
      <p>The beneficial effects of flavonoids like quercetin come from their ability to function as antioxidants inside your body.</p>
      <p>Antioxidants are compounds that can bind to and neutralize free radicals.</p>
      <p>Free Radicals are unstable molecules that may cause cellular damage when their levels become too high.</p>
      <p>Damage caused by free radicals has been linked to numerous chronic diseases, including cancer, heart disease, and diabetes.</p>
      <p>Quercetin is the most abundant flavonoid in the diet. It’s estimated that the average person consumes 10-100 mg of it daily through various food sources.</p>
      <p>Foods that commonly contain quercetin include onions, apples, grapes, berries, broccoli, citrus fruits, cherries, green tea, coffee, red wine, and capers.</p>
    </div>
    <Outlet/>
    </>
  );
};

export default About;
