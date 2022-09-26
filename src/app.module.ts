import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { users } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-211-182-159.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'pfavcixiosyzwp',
      password: '4db641d130d8fed1107cff08b55b694d708c8cfb6c1ec741afacd6655fe5e2a8',
      database: 'ddovqrgegf3sag',
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      },
      //entities: [users, Auth],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 }
