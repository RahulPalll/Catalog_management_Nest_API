import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { User2Service } from './user2.services';
import { User2 } from './entities/user2.entity';
import { CreateUser2Dto } from './dto/user2.dto';
import { UpdateUser2Dto } from './dto/user2.dto';

@Controller('users2')
export class User2Controller {
  constructor(private readonly user2Service: User2Service) {}

  @Get()
  findAll(): Promise<User2[]> {
    return this.user2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User2> {
    return this.user2Service.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUser2Dto): Promise<User2> {
    return this.user2Service.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUser2Dto: UpdateUser2Dto,
  ): Promise<User2> {
    return this.user2Service.update(id, updateUser2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.user2Service.delete(id);
  }
}
