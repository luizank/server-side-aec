import { object, string, TypeOf } from "zod";

export const loginUserSchema = object({
  body: object({
    name: string({ required_error: "Name is required" }),
    password: string({ required_error: "Password is required" }).min(
      8,
      "Nome ou senha inválidos"
    ),
  }),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
