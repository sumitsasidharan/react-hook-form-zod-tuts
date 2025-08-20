import { useForm } from "react-hook-form"


const Users = () => {
  const { register } = useForm<{email: string}>();

  return (
    <div>
      <input {...register('email')} placeholder="Email" />
    </div>
  )
}

export default Users

// 19:00