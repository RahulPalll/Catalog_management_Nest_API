// comments.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Comment } from './dto/comment.entity';
import { CommentDTO } from './entities/comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() commentDto: CommentDTO): Promise<Comment> {
    return this.commentsService.create(commentDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() commentDto: CommentDTO,
  ): Promise<Comment> {
    return this.commentsService.update(parseInt(id, 10), commentDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.commentsService.delete(parseInt(id, 10));
  }
}
