import { useForm, type SubmitHandler } from 'react-hook-form';

type FormFields = {
  email: string;
  password: string;
};

const ReactHookFormCosden = () => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
    defaultValues: {
      email: "test@email.com"
    }
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    console.log(data);
    } catch (error) {
      // setError("email", {
      //   message: "This  email is already taken"
      // })
      // for all fields, for the form as a whole
      setError("root", {
        message: "This  email is already taken"
      })
    }
    
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

      <button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading" : "Submit"}</button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default ReactHookFormCosden;
