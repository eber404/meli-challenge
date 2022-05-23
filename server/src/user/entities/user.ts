import crypto from 'node:crypto';

interface UserProps {
  id?: string;
  name: string;
  email: string;
  password?: string;
}

export class User {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;

  constructor(props: UserProps) {
    this.id = props.id ?? crypto.randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }
}
