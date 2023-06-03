import style from './Input.module.scss';

export default function Input({
  type,
  name,
  label,
  register,
  placeholder,
  errors,
  validator,
}) {
  const classes = [style.input, errors[name] && style.error].join(' ').trim();

  return (
    <div className={classes}>
      <label htmlFor={name}>
        <p>{label}</p>
        {errors[name] ? <span>{errors[name].message}</span> : null}
      </label>
      <input
        type={type || 'text'}
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: 'This filed is required',
          ...validator,
        })}
      />
    </div>
  );
}
