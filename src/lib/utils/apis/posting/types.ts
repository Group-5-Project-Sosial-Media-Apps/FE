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