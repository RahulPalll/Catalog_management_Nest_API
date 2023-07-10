// fabric-types.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FabricType } from './entities/fabric-type.entity';
import { FabricTypesService } from './fabric-types.service';

@Controller('fabric-types')
export class FabricTypesController {
  constructor(private readonly fabricTypesService: FabricTypesService) {}

  @Get()
  findAll(): Promise<FabricType[]> {
    return this.fabricTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FabricType> {
    return this.fabricTypesService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() fabricType: FabricType): Promise<FabricType> {
    return this.fabricTypesService.create(fabricType);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() fabricType: FabricType,
  ): Promise<FabricType> {
    return this.fabricTypesService.update(parseInt(id, 10), fabricType);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.fabricTypesService.delete(parseInt(id, 10));
  }
}
