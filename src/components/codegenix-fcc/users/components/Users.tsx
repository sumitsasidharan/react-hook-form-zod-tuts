import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { userSchema, type UserSchema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { RHFAutocomplete } from './shared/RHFAutocomplete';

const Users = () => {
  const {
    register,
    formState: { errors },
  } = useForm<UserSchema>({
    mode: 'all',
    resolver: zodResolver(userSchema),
  });
  // 'mode': by default, react hook form shows errors when users hit the submit button ie onSubmit. So change it using 'mode'.

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register('name')}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register('email')}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete />
      <Autocomplete
        options={[{ id: '1', label: 'Texas' }]}
        renderInput={(params) => <TextField {...params} label="states" />}
      />
    </Stack>
  );
};

export default Users;

{
  /* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', {
        required: {value: true, message: 'the email is required!'},
        maxLength: {value: 10, message: 'Too many characters!'},
      })} placeholder="Email" />
      <p style={{color: 'red'}}>{errors.email?.message}</p>
    </form> */
}
