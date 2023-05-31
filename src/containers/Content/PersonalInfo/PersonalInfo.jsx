import { useForm } from 'react-hook-form';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Form/Input';

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

  return (
    <>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          label="Name"
          placeholder="e.g. Stephen King"
          register={register}
        />
        <input type="submit" value="Next" />
      </form>
    </>
  );
}
