import { useForm, type SubmitHandler } from 'react-hook-form';

type FormFields = {
  email: string;
  password: string;
};

const ReactHookFormCosden = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: "Email is required",
          // pattern: 'regex pattern'
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @"
            }
            return true; // return true if input valid
          },
        })}
        type="text"
        placeholder="email"
      />
      {errors.email && <div>{errors.email.message}</div>}

      <input
        {...register('password', {
          required: "Password is required",
          // minLength: 8,
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters."
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <div>{errors.password.message}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactHookFormCosden;
