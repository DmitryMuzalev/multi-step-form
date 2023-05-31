import { NavLink } from 'react-router-dom';
import styles from './StepLink.module.scss';

export default function StepLink({ id, title, completed }) {
  const classes = [styles.stepLink, completed && styles.completed]
    .join(' ')
    .trim();

  return (
    <NavLink to={id === 1 ? '/' : `/step${id}`} className={classes}>
      <span>{id}</span>
      <div>
        <p className={styles.stepLink__subtitle}>step {id}</p>
        <p className={styles.stepLink__title}>{title}</p>
      </div>
    </NavLink>
  );
}
