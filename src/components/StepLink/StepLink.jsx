import { NavLink } from 'react-router-dom';
import styles from './StepLink.module.scss';

export default function StepLink({ id, label, currentStepNumber, selectStep }) {
  const classes = [
    styles.stepLink,
    currentStepNumber === id && styles.completed,
  ]
    .join(' ')
    .trim();

  return (
    <NavLink
      to={id === 1 ? '/' : `/step${id}`}
      className={classes}
      onClick={() => {
        selectStep(id);
      }}
    >
      <span>{id}</span>
      <div>
        <p className={styles.stepLink__subtitle}>step {id}</p>
        <p className={styles.stepLink__label}>{label}</p>
      </div>
    </NavLink>
  );
}
