import styles from './Header.module.scss';

export default function Header({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
