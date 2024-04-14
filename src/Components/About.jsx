import img from './../images/250px-Quercetin.svg.png'
import styles from './../styles/About.module.css'

const About = () => {
  return (
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
    </div>
  );
};

export default About;
