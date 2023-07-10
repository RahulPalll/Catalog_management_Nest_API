// age-groups.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgeGroupsController } from './age-groups.controller';
import { AgeGroupsService } from './age-groups.service';
import { AgeGroup } from './entities/age-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgeGroup])],
  controllers: [AgeGroupsController],
  providers: [AgeGroupsService],
})
export class AgeGroupsModule {}
