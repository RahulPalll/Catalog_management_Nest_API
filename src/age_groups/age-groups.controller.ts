// age-groups.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AgeGroup } from './entities/age-group.entity';
import { AgeGroupDTO } from './dto/age-group.dto';
import { AgeGroupsService } from './age-groups.service';

@Controller('age-groups')
export class AgeGroupsController {
  constructor(private readonly ageGroupsService: AgeGroupsService) {}

  @Get()
  findAll(): Promise<AgeGroup[]> {
    return this.ageGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AgeGroup> {
    return this.ageGroupsService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() ageGroupDto: AgeGroupDTO): Promise<AgeGroup> {
    return this.ageGroupsService.create(ageGroupDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() ageGroupDto: AgeGroupDTO,
  ): Promise<AgeGroup> {
    return this.ageGroupsService.update(parseInt(id, 10), ageGroupDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.ageGroupsService.delete(parseInt(id, 10));
  }
}
