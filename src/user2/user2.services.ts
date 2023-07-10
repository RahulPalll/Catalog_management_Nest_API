import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User2 } from './entities/user2.entity';
import { CreateUser2Dto } from './dto/user2.dto';
import { UpdateUser2Dto } from './dto/user2.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class User2Service {
  constructor(
    @InjectRepository(User2)
    private user2Repository: Repository<User2>,
  ) {}

  findAll(): Promise<User2[]> {
    return this.user2Repository.find();
  }

  findOne(id: number): Promise<User2> {
    return this.user2Repository.findOne({ where: { id: id } });
  }

  async create(createUser2Dto: CreateUser2Dto): Promise<User2> {
    const { password, ...rest } = createUser2Dto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const User2 = this.user2Repository.create({
      password: hashedPassword,
      ...rest,
    });
    return this.user2Repository.save(User2);
  }

  async update(id: number, updateUser2Dto: UpdateUser2Dto): Promise<User2> {
    await this.user2Repository.update(id, updateUser2Dto);
    return this.user2Repository.findOne({ where: { id: id } });
  }

  async delete(id: number): Promise<void> {
    const result = await this.user2Repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User2 entity with ID ${id} not found.`);
    }
  }
}
