import styles from './../styles/HealthBenefits.module.css'

const HealthBenefits = () => {
  return (
    <div className={styles.hb}>
      <h2>Health Benefits of Quercetin</h2>
      <h3>May reduce inflammation</h3>
      <p>Free Radicals may do more than simply damage your cells.</p>
      <p>Research shows that high levels of free radicals may help activate genes that promote inflammation. Thus, high levels of free radicals may lead to an increased inflammatory response.</p>
      <p>Studies show that quercetin may help reduce inflammation in human cells, including the molecular tumour necrosis (TNFα) and interleukin-6 (IL-6).</p>
      <h3>May ease allergy symptoms</h3>
      <p>Quercetin's potential anti-inflammatory properties may provide allergy symptom relief</p>
      <p>For example, one study showed that taking quercetin supplements suppressed peanut-related anaphylactic reactions in mice.</p>
      <p>Still it's unclear whether the compound has the same effect on allergies in humans, so more research is needed before it can be recommended as an alternative treatment.</p>
      <h3>May have anti cancer effects</h3>
      <p>Becaues quercetin has anti-oxidant properties, it may have cancer-fighting properties.</p>
      <p>In a review of test-tube and animal studies, quercetin was found to suppress cell growth and induce cell death in prostate cancer cells.</p>
    </div>
  );
};

export default HealthBenefits;
