import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getAbdullah(): string;
    getAbdullahName(): string;
    getCal(): number;
    getDate(): Date;
    getObject(): any;
}
