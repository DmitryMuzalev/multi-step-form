import StepLink from '../../components/StepLink/StepLink';
import styles from './Sidebar.module.scss';
export default function Sidebar({ steps, currentStepNumber, selectStep }) {
  const stepsList = steps.map((step, i) => {
    return (
      <li key={i}>
        <StepLink
          {...step}
          currentStepNumber={currentStepNumber}
          selectStep={selectStep}
        />
      </li>
    );
  });

  return (
    <div className={styles.sidebar}>
      <ul>{stepsList}</ul>
    </div>
  );
}
