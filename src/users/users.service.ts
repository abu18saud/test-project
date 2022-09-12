import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return await this.usersRepository.save({
      id: users.id,
      ar_name: users.ar_name,
      en_name: users.en_name,
      created_date: users.created_date,
      modified_date: users.modified_date
    })
  }

  findAll(): Promise<users[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<users> {
    this.user = await this.usersRepository.query("Select * from users WHERE id=" + id) as Promise<users>;
    return this.user[0];
  }

  async findGroup(id: number): Promise<any> {
    return this.usersRepository.query("Select DISTINCT * from users WHERE group_id=" + id + " ORDER BY id");
  }

  async update(users: users): Promise<UpdateResult> {
    return await this.usersRepository.update(users.id, users);
  }

  remove(id: number): Promise<any> {
    return this.usersRepository.delete(id);
  }
}