import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/abdullah/age')
  getAbdullah(): string {
    return this.appService.getAbdullah().age;
  }

  @Get('/abdullah/name')
  getAbdullahName(): string {
    return this.appService.getAbdullah().name;
  }

  @Get('/cal')
  getCal(): number {
    return this.appService.getCal();
  }

  @Get('/date')
  getDate(): Date{
    return this.appService.getNow();
  }

  @Get('/object')
  getObject(): any{
    return this.appService.getObject();
  }

}
