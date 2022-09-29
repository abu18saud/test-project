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
    console.log(userDB);
    if (userDB !== undefined) {
      const matched = comparePasswords(auth.hash_raw_password, userDB.password);
      console.log(matched);
      if (matched) {
        auth.message = 'User Validation Success!';
        console.log(auth.message);

        auth.hash_raw_password = await encodePassword(auth.hash_raw_password) as string;
        auth.hash_db_password = userDB.password as string;
        auth.user = userDB;
        await this.authRepository.save(auth);
        return await this.usersService.findUserByUsername(auth.username);;
      } else {
        auth.message = 'User Validation Faild!';
        console.log(auth.message);

        auth.hash_raw_password = await encodePassword(auth.hash_raw_password) as string;
        auth.hash_db_password = "";

        await this.authRepository.save(auth);
        return auth;
      }
    } else {
      auth.message = 'Username and password do not match';
      console.log(auth.message);

      auth.hash_raw_password = await encodePassword(auth.hash_raw_password) as string;
      auth.hash_db_password = "";
      console.log(auth);

      await this.authRepository.save(auth);
      return auth;
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
