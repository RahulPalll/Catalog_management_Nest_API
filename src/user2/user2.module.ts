import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User2Controller } from './user2.controller';
import { User2Service } from './user2.services';
import { User2 } from './entities/user2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User2])],
  controllers: [User2Controller],
  providers: [User2Service],
})
export class User2Module {}
