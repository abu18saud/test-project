import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { comparePasswords, encodePassword } from 'src/utils/bcrypt';
import { Repository, UpdateResult } from 'typeorm';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
    private usersService: UsersService
  ) { }

  async create(auth: Auth) {
    const userDB = await this.usersService.findUserByUsername_(auth.username);

    if (userDB) {
      console.log(userDB.password);
      const matched = comparePasswords(auth.hash_raw_password, userDB.password);
      if (matched) {
        auth.message = 'User Validation Success!';
        console.log(auth.message);

        auth.hash_raw_password = await encodePassword(auth.hash_raw_password) as string;
        auth.hash_db_password = userDB.password as string;
        console.log(auth);

        await this.authRepository.save(auth);
        return await this.usersService.findUserByUsername(auth.username);;
      } else {
        auth.message = 'User Validation Faild!';
        console.log(auth.message);

        auth.hash_raw_password = await encodePassword(auth.hash_raw_password) as string;
        auth.hash_db_password = userDB.password as string;
        console.log(auth);

        await this.authRepository.save(auth);
        return auth.message;
      }
    } else {
      auth.message = 'Passwords do not match';
      console.log(auth.message);

      auth.hash_raw_password = await encodePassword(auth.hash_raw_password) as string;
      auth.hash_db_password = userDB.password as string;
      console.log(auth);

      await this.authRepository.save(auth);
      return auth.message;
    }
  }

  findAll(): Promise<Auth[]> {
    return this.authRepository.find();
  }

  async findOne(id: number): Promise<Auth> {
    return this.authRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(auth: Auth): Promise<UpdateResult> {
    return await this.authRepository.update(auth.id, auth);
  }

  remove(id: number): Promise<any> {
    return this.authRepository.delete(id);
  }
}
