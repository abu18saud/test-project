import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAbdullah(): string {
    return "Abdullah Alsalem";
  }
  getCal(): number {
    return 100 + 200;
  }

  getNow(): Date {
    return new Date();
  }
  

}
