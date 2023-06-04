import styles from './PlanCard.module.scss';

export default function PlanCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}></div>
      <div className={styles.card__info}>
        <h4 className={styles.card__title}>Advanced</h4>
        <p className={styles.card__price}>&#36;90/yr</p>
        <p className={styles.card__sale}>2 months free</p>
      </div>
    </div>
  );
}
