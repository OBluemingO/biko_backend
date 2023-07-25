export interface Auth {
  email: string;
  password: string;
}

export enum Role  {
  admin = 'admin',
  user = 'user',
} 