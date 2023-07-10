// fabric-types.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FabricType } from './entities/fabric-type.entity';

@Injectable()
export class FabricTypesService {
  constructor(
    @InjectRepository(FabricType)
    private readonly fabricTypeRepository: Repository<FabricType>,
  ) {}

  findAll(): Promise<FabricType[]> {
    return this.fabricTypeRepository.find();
  }

  findOne(id: number): Promise<FabricType> {
    return this.fabricTypeRepository.findOne({ where: { id: id } });
  }

  create(fabricType: FabricType): Promise<FabricType> {
    return this.fabricTypeRepository.save(fabricType);
  }

  async update(id: number, fabricType: FabricType): Promise<FabricType> {
    const existingFabricType = await this.fabricTypeRepository.findOne({
      where: { id: id },
    });
    if (!existingFabricType) {
      // Handle error, fabric type not found
    }

    return this.fabricTypeRepository.save({
      ...existingFabricType,
      ...fabricType,
    });
  }

  async delete(id: number): Promise<void> {
    const result = await this.fabricTypeRepository.delete(id);
    if (result.affected === 0) {
      // Handle error, fabric type not found
    }
  }
}
