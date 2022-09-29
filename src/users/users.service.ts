import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository, UpdateResult } from 'typeorm';
import { users } from './entities/user.entity';

@Injectable()
export class UsersService {
  public user: Promise<users>;
  constructor(
    @InjectRepository(users)
    private readonly usersRepository: Repository<users>,
  ) { }

  async create(users: users) {
    users.password = encodePassword(users.password);
    console.log(users.password);
    return await this.usersRepository.save(users);
  }

  findAll(): Promise<users[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.usersRepository.findOne({
      where: {
        id: id
      }
    });

    // this.user = await this.usersRepository.query("Select * from users WHERE id=" + id) as Promise<users>;
    // return this.user[0];
  }

  async findUserByUsername(username: string): Promise<any> {
    return await this.usersRepository.findOne({
      where: {
        username: username
      }
    });
    // this.user = await this.usersRepository.query("Select * from users WHERE username='" + username +"'") as Promise<users>;
    // return this.user[0];
  }

  async findUserByUsername_(username: string): Promise<users> {
    this.user = await this.usersRepository.query("Select * from users WHERE username='" + username + "'") as Promise<users>;
    return this.user[0];
  }

  async findGroup(id: number): Promise<any> {
    return this.usersRepository.query("Select DISTINCT * from users WHERE group_id=" + id + " ORDER BY id");
  }

  async update(users: users): Promise<UpdateResult> {
    users.password = encodePassword(users.password);
    return await this.usersRepository.update(users.id, users);
  }

  remove(id: number): Promise<any> {
    return this.usersRepository.delete(id);
  }

  async removeAll(): Promise<any> {
    this.user = await this.usersRepository.query("DELETE FROM Users") as Promise<any>;
    return "Ok, Delete all rows in users table";
  }
}