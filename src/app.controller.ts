import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/abdullah')
  getAbdullah(): string {
    return this.appService.getAbdullah();
  }

  @Get('/cal')
  getCal(): number {
    return this.appService.getCal();
  }

  @Get('/date')
  getDate(): Date{
    return this.appService.getNow();
  }
}
