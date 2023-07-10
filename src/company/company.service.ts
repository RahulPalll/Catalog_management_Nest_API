import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entities';

import { CreateCompanyDto } from './dto/create-company.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = new Company();
    company.name = createCompanyDto.name;
    // Set other properties as required

    return this.companyRepository.save(company);
  }
}
