import { Posts } from './posts';

export type User = {
  name: string;
  role: string;
  id: string;
  createdAt: string;
  email: string;
  posts?: Posts[];
};
