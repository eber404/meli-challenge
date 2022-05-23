import { User } from '@/user/entities/user';
import * as users from '@/user/mocks/users.mock.json';
import { GetUserByEmailRepository } from '@/user/repositories/get-user-by-email.repository';

type UserDTO = typeof users[0];

export class GetUserByEmailRepositoryLocal implements GetUserByEmailRepository {
  async getUserByEmail(email: string): Promise<User | null> {
    const foundUser = users.find((user: UserDTO) => user.email === email);

    if (!foundUser) return null;

    return new User({
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      password: foundUser.password,
    });
  }
}
