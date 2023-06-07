import Button from '../../components/Form/Button/Button';
import Header from '../../components/Header/Header';
import styles from './Content.module.scss';

export default function Content({ lastStep, children, ...props }) {
  const { id } = { ...props };
  return (
    <div className={styles.content}>
      <Header {...props} />
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>
        {id !== 1 ? (
          <Button type="secondary">Go Back</Button>
        ) : (
          <div style={{ visibility: 'hidden' }}></div>
        )}
        {id === lastStep ? (
          <Button type="confirm">Confirm</Button>
        ) : (
          <Button>Next Step</Button>
        )}
      </div>
    </div>
  );
}
