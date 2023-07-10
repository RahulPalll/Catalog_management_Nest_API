// locations.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { LocationDTO } from './dto/location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  findOne(id: number): Promise<Location> {
    return this.locationRepository.findOne({ where: { id: id } });
  }

  create(locationDto: LocationDTO): Promise<Location> {
    const location: Location = this.locationRepository.create(locationDto);
    return this.locationRepository.save(location);
  }

  async update(id: number, locationDto: LocationDTO): Promise<Location> {
    const existingLocation = await this.locationRepository.findOne({
      where: { id: id },
    });
    if (!existingLocation) {
      // Handle error, location not found
    }

    this.locationRepository.merge(existingLocation, locationDto);
    return this.locationRepository.save(existingLocation);
  }

  async delete(id: number): Promise<void> {
    const result = await this.locationRepository.delete(id);
    if (result.affected === 0) {
      // Handle error, location not found
    }
  }
}
