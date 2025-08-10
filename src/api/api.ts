import z from "zod";
import { env } from "../utils/env";

const getUsersSchema = z.object({
  limit: z.number(),
  offset: z.number(),
})

type UsersFilters = z.infer<typeof getUsersSchema>;

export async function getUsers(filters: UsersFilters) {
  // use the filters

  const result = getUsersSchema.safeParse(filters);

  fetch('/api', {
    headers: {
      Authorization: `Bearer ${env.SECRET_KEY}`
    }
  })
}