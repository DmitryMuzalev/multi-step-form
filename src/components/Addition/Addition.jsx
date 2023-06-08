import { useState } from 'react';
import styles from './Addition.module.scss';
import classNames from 'classnames';
export default function Addition({ title, description, price, isMonthly }) {
  const [isChecked, setIsChecked] = useState(false);

  const classes = classNames({
    [styles.addition]: true,
    [styles.checked]: isChecked,
  });

  const toggleIsChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className={classes}>
      <input type="checkbox" checked={isChecked} onChange={toggleIsChecked} />
      <div className={styles.addition__info}>
        <h4 className={styles.addition__title}>{title}</h4>
        <p className={styles.addition__description}>{description}</p>
      </div>
      <span className={styles.addition__price}>
        +${isMonthly ? price.monthly + '/mo' : price.yearly + '/yr'}
      </span>
    </label>
  );
}
