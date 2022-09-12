import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { users } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() users: users) {
    console.log(users);
    return this.usersService.create(users);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('group/:id')
  findGroup(@Param('id') id: string) {
    return this.usersService.findGroup(+id);
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post(":id/update")
  update(@Param('id') id: string, @Body() users: users): Promise<any> {
    users.id = Number(id);
    return this.usersService.update(users);
  }

  // DELETE
  @Post(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.remove(id);
  }
}