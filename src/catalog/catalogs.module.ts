// catalogs.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogsController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';
import { Catalog } from './entities/catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  controllers: [CatalogsController],
  providers: [CatalogsService],
})
export class CatalogsModule {}
