import { User } from '@/user/entities/user';

export abstract class GetUserByEmailRepository {
  abstract getUserByEmail(email: string): Promise<User | null>;
}
