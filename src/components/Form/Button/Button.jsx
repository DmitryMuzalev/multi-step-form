import style from './Button.module.scss';
import classNames from 'classnames';

export default function Button({ children, onClick, type }) {
  const classes = classNames({
    [style.btn]: true,
    [style.secondary]: type === 'secondary',
    [style.confirm]: type === 'confirm',
    [style.primary]: !type,
  });

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
