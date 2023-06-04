import style from './PersonalInfo.module.scss';

import { useForm } from 'react-hook-form';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Form/Input/Input';
import Button from '../../../components/Form/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function PersonalInfo() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onNext = () => {
    navigate('/step2');
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
      value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
      message: 'Incorrect phone number',
    },
  });

  return (
    <>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
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
        <Button onClick={onNext}>Next Step</Button>
      </form>
    </>
  );
}
