import Image from '../Image/Image';
import styles from './PlanCard.module.scss';

export default function PlanCard({ isMonthly, label, icon, price }) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={label} width={40} height={40} />
      <div className={styles.card__info}>
        <h4 className={styles.card__title}>{label}</h4>
        <p className={styles.card__price}>
          &#36;{isMonthly ? `${price.monthly}/mo` : `${price.yearly}/yr`}
        </p>
        {!isMonthly && <p className={styles.card__sale}>2 months free</p>}
      </div>
    </div>
  );
}
