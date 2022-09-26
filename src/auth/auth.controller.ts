import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() auth: Auth) {
    return this.authService.create(auth);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Post(":id/update")
  update(@Param('id') id: string, @Body() auth: Auth): Promise<any> {
    auth.id = Number(id);
    return this.authService.update(auth);
  }

  // DELETE
  @Post(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.authService.remove(id);
  }
}
