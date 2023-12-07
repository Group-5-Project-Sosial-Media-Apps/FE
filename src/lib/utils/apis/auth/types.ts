import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  nama: z.string().min(1, { message: "Nama minimal 1 angka atau lebih" }),
  username: z.string().min(1, { message: "username minimal 1 angka atau lebih" }),
  email: z.string().min(1, { message: "email minimal 1 angka atau lebih" }),
  password: z.string().min(1, { message: "password minimal 1 angka atau lebih" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
