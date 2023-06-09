import style from './PersonalInfo.module.scss';

import { useForm } from 'react-hook-form';
import Input from '../../../components/Form/Input/Input';
import { useDate } from '../../AppContext/AppContext';

export default function PersonalInfo() {
  const { data } = useDate();

  const { userInfo } = { ...data };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: userInfo });

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateEmail = () => ({
    pattern: {
      value:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      message: 'Incorrect email address',
    },
  });

  const validatePhoneNumber = () => ({
    pattern: {
      value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
      message: 'Incorrect phone number',
    },
  });

  return (
    <>
      <form className={style.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          label="Name"
          placeholder="e.g. Stephen King"
          register={register}
          errors={errors}
        />
        <Input
          type="email"
          name="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          register={register}
          errors={errors}
          validator={validateEmail()}
        />
        <Input
          name="phone"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          register={register}
          errors={errors}
          validator={validatePhoneNumber()}
        />
      </form>
    </>
  );
}
