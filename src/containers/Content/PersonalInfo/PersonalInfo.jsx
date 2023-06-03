import { useForm } from 'react-hook-form';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Form/Input/Input';

export default function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const validateEmail = () => ({
    pattern: {
      value:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      message: 'Incorrect email address',
    },
  });

  return (
    <>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" value="Next" />
      </form>
    </>
  );
}
