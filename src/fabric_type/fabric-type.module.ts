// fabric-types.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricTypesController } from './fabric-types.controller';
import { FabricTypesService } from './fabric-types.service';
import { FabricType } from './entities/fabric-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FabricType])],
  controllers: [FabricTypesController],
  providers: [FabricTypesService],
})
export class FabricTypesModule {}
