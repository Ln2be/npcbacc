export interface UserType {
  username: string;
  password: string;
  role: string;
  hash?: string;
  salt: string | "";
  _id?: string;
  id?: string;
  createdAt?: number;
}
