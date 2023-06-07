import Image from '../Image/Image';
import styles from './PlanCard.module.scss';

export default function PlanCard({
  onChangeCurrentPlan,
  currentPlan,
  isMonthly,
  id,
  label,
  icon,
  price,
}) {
  const selected = currentPlan === id;
  const classes = [styles.card, selected && styles.selected].join(' ').trim();

  const onClick = () => {
    onChangeCurrentPlan(id);
  };
  return (
    <div className={classes} onClick={!selected ? onClick : null}>
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
