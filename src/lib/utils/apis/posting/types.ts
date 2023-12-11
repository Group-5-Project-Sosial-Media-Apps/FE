import * as z from "zod";
export interface Response {
  message: string;
  data: Posting[];
  pagination: Pagination;
}

export interface Posting {
  postID: number;
  pesan: string;
  image: string;
  user: User;
  comment: Comment[];
}

export interface User {
  userID: number;
  name: string;
  username: string;
  image: string;
}

export interface Comment {
  commentID: number;
  text: string;
  user: User2;
}

export interface User2 {
  userID: number;
  name: string;
  username: string;
  image: string;
}

export interface Pagination {
  page: number;
  pagesize: number;
}

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const editSchema = z.object({
  pesan: z.string().min(1, {
    message: "Caption is required",
  }),
  image: z
    .instanceof(File)
    .refine((files) => files?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.type), "Only .jpg, .jpeg, .png formats are supported"),
});

export type EditSchema = z.infer<typeof editSchema>;

export interface BodyData {
  pesan: string;
  image: File | null;
}
