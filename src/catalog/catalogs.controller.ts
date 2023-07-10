// catalogs.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Catalog } from './entities/catalog.entity';
import { CatalogDTO } from './dto/catalog.dto';
import { CatalogsService } from './catalogs.service';

@Controller('catalogs')
export class CatalogsController {
  constructor(private readonly catalogsService: CatalogsService) {}

  @Get()
  findAll(): Promise<Catalog[]> {
    return this.catalogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Catalog> {
    return this.catalogsService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() catalogDto: CatalogDTO): Promise<Catalog> {
    return this.catalogsService.create(catalogDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() catalogDto: CatalogDTO,
  ): Promise<Catalog> {
    return this.catalogsService.update(parseInt(id, 10), catalogDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.catalogsService.delete(parseInt(id, 10));
  }
}
