import { User } from "./user";

export type Posts = {
  id: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  title: string;
  author?: User;
  authorId?: number;
};
