// age-groups.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgeGroup } from './entities/age-group.entity';
import { AgeGroupDTO } from './dto/age-group.dto';
@Injectable()
export class AgeGroupsService {
  constructor(
    @InjectRepository(AgeGroup)
    private readonly ageGroupRepository: Repository<AgeGroup>,
  ) {}

  findAll(): Promise<AgeGroup[]> {
    return this.ageGroupRepository.find();
  }

  findOne(id: number): Promise<AgeGroup> {
    return this.ageGroupRepository.findOne({ where: { id: id } });
  }

  create(ageGroupDto: AgeGroupDTO): Promise<AgeGroup> {
    const ageGroup: AgeGroup = this.ageGroupRepository.create(ageGroupDto);
    return this.ageGroupRepository.save(ageGroup);
  }

  async update(id: number, ageGroupDto: AgeGroupDTO): Promise<AgeGroup> {
    const existingAgeGroup = await this.ageGroupRepository.findOne({
      where: { id: id },
    });
    if (!existingAgeGroup) {
      // Handle error, age group not found
    }

    this.ageGroupRepository.merge(existingAgeGroup, ageGroupDto);
    return this.ageGroupRepository.save(existingAgeGroup);
  }

  async delete(id: number): Promise<void> {
    const result = await this.ageGroupRepository.delete(id);
    if (result.affected === 0) {
      // Handle error, age group not found
    }
  }
}
