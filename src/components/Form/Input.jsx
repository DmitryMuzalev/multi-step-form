import style from './Input.module.scss';

export default function Input({ name, label, register, placeholder }) {
  return (
    <div className={style.input}>
      <label htmlFor={name}>
        <p>{label}</p>
        <span>Error message</span>
      </label>
      <input
        id={name}
        placeholder={placeholder}
        {...register(name, { require: 'This filed is required' })}
      />
    </div>
  );
}
