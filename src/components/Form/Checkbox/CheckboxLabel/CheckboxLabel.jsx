import styles from './CheckboxLabel.module.css';

export default function CheckboxLabel({ text, isMonthly, onChangePlanMode }) {
  const status = text === 'Monthly' ? isMonthly : !isMonthly;
  const classes = [styles.label, status && styles.active].join(' ').trim();
  return (
    <p onClick={!status ? onChangePlanMode : null} className={classes}>
      {text}
    </p>
  );
}
