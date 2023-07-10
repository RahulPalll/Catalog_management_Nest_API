// locations.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Location } from './entities/location.entity';
import { LocationDTO } from './dto/location.dto';
import { LocationsService } from './location.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  findAll(): Promise<Location[]> {
    return this.locationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Location> {
    return this.locationsService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() locationDto: LocationDTO): Promise<Location> {
    return this.locationsService.create(locationDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() locationDto: LocationDTO,
  ): Promise<Location> {
    return this.locationsService.update(parseInt(id, 10), locationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.locationsService.delete(parseInt(id, 10));
  }
}
