// catalogs.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './entities/catalog.entity';
import { CatalogDTO } from './dto/catalog.dto';

@Injectable()
export class CatalogsService {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>,
  ) {}
  findOne(id: number): Promise<Catalog> {
    return this.catalogRepository
      .createQueryBuilder('catalog')
      .leftJoinAndSelect('catalog.fabricType', 'fabricType')
      .leftJoinAndSelect('catalog.ageGroup', 'ageGroup')
      .leftJoinAndSelect('catalog.location', 'location')
      .leftJoinAndSelect('catalog.company', 'company')
      .leftJoinAndSelect('catalog.user', 'user')
      .where('catalog.id = :id', { id })
      .getOne();
  }

  findAll(): Promise<Catalog[]> {
    return this.catalogRepository.find();
  }

  create(catalogDto: CatalogDTO): Promise<Catalog> {
    const catalog: Catalog = this.catalogRepository.create(catalogDto);
    return this.catalogRepository.save(catalog);
  }

  async update(id: number, catalogDto: CatalogDTO): Promise<Catalog> {
    const existingCatalog = await this.catalogRepository.findOne({
      where: { id: id },
    });
    if (!existingCatalog) {
      // Handle error, catalog not found
    }

    this.catalogRepository.merge(existingCatalog, catalogDto);
    return this.catalogRepository.save(existingCatalog);
  }

  async delete(id: number): Promise<void> {
    const result = await this.catalogRepository.delete(id);
    if (result.affected === 0) {
      // Handle error, catalog not found
    }
  }
}
