import { FormProvider, useForm } from "react-hook-form";
import Users from "./Users";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type UserSchema } from "../types/schema";

export function UsersProvidder() {
  const methods = useForm<UserSchema>({
      mode: 'all',
      resolver: zodResolver(userSchema),
    });
    // 'mode': by default, react hook form shows errors when users hit the submit button ie onSubmit. So change it using 'mode'.

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  )
}