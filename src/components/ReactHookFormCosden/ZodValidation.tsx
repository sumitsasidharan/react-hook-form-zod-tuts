import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {z} from 'zod';

const userFormSchema = z.object({
  firstName: z.string().optional(),
  email: z.email(),
  profileUrl: z.url(),
  age: z.number().min(18),
  friends: z.array(z.string()).max(3),
  settings: z.object({
    isSubscribed: z.boolean()
  })
})

type UserForm = z.infer<typeof userFormSchema>;

// const user: User = {
//   // firstName: "Sumit",
//   email: "sumit@gmail.com",
//   profileUrl: "https://google.com",
//   age: 42,
//   friends: ['Mike', 'Nikki', 'Gerogia'],
//   settings: {
//     isSubscribed: true
//   }
// }

// console.log(userSchema.parse(user))
// console.log(userSchema.safeParse(user))

const ZodValidation = () => {
  const form = useForm<UserForm>({
    resolver: zodResolver(userFormSchema)
  });

  function handleSubmit(data: UserForm) {
    const result = userFormSchema.safeParse(data);

    if (result.success) {
      //handle success
    } else {
      // handle error
    }
  }

  return <div>
    <h2>ZodValidation</h2>


  </div>;
};

export default ZodValidation;
