import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql205.byetcluster.com',
      port: 3306,
      username: 'epiz_32542567',
      password: 'KHQhEmN9iWjKR79',
      database: 'epiz_32542567_test',
      charset : 'utf8mb4',
      logging: false,
      autoLoadEntities: true,
      synchronize: true,
      acquireTimeout :  100000,
      connectTimeout :  100000,
    }
  )




  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
