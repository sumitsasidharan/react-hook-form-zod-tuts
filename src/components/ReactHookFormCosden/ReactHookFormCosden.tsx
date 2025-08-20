import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from 'zod';

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
})

// infering from schema directly
type FormFields = z.infer<typeof schema>;

// type FormFields = {
//   email: string;
//   password: string;
// };

const ReactHookFormCosden = () => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
    defaultValues: {
      email: "test@email.com"
    },
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    console.log(data);
    } catch (error) {
      console.log(error)
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
      {/* react hook form alone */}
      {/* <input
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
      /> */}
      {/* WITH ZOD */}
      <input
        {...register('email')}
        type="text"
        placeholder="email"
      />
      {errors.email && <div style={{ color: "red"}}>{errors.email.message}</div>}

      <input
        {...register('password')}
        type="password"
        placeholder="Password"
      />
      {errors.password && <div style={{ color: "red"}}>{errors.password.message}</div>}

      <button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading" : "Submit"}</button>
      {errors.root && <div style={{ color: "red"}}>{errors.root.message}</div>}
    </form>
  );
};

export default ReactHookFormCosden;
