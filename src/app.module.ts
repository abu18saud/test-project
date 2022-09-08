import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-34-247-72-29.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'nrrhawbkisgusi',
      password: 'c90455b1e94aeacf88fa3f5d5b150c3ffc6ae953287f8d04b75b069386bf98bb',
      database: 'd3ivjvcl740b8e',
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      },
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 }
