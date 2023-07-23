import bcrypt from "bcrypt";

interface IHasher {
  hashPassword(password: string): string;
  verifyPassword(password: string, hashPasasword: string): boolean;
}

export class Hasher implements IHasher {
  public hashPassword(password:string) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }
  public verifyPassword(password: string, hashPassword: string) {
    return bcrypt.compareSync(password, hashPassword);
  }
}
