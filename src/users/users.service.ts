import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users)
    private readonly usersRepository: Repository<users>,
) { }

  async create(users: users) {
    return await this.usersRepository.save(users);
  }

  findAll(): Promise<users[]> {
    return this.usersRepository.find();
  }

  findOne(id: any): Promise<users> {
    return this.usersRepository.findOne(id);
  }

  async findGroup(id: number): Promise<any> {
    return this.usersRepository.query("Select DISTINCT * from users WHERE group_id="+ id +" ORDER BY id");
  }

  async update(users: users): Promise<UpdateResult> {
    return await this.usersRepository.update(users.id, users);
  }

  remove(id: number): Promise<any> {
    return this.usersRepository.delete(id);
  }
}