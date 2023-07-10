// comments.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './dto/comment.entity';
import { CommentDTO } from './entities/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  findOne(id: number): Promise<Comment> {
    return this.commentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .leftJoinAndSelect('comment.catalog', 'catalog')
      .leftJoinAndSelect('catalog.location', 'location')
      .leftJoinAndSelect('catalog.company', 'company')
      .leftJoinAndSelect('catalog.user', 'user')
      .where('catalog.id = :id', { id })
      .getOne();
  }

  create(commentDto: CommentDTO): Promise<Comment> {
    const comment: Comment = this.commentRepository.create(commentDto);
    return this.commentRepository.save(comment);
  }

  async update(id: number, commentDto: CommentDTO): Promise<Comment> {
    const existingComment = await this.commentRepository.findOne({
      where: { id: id },
    });
    if (!existingComment) {
    }

    this.commentRepository.merge(existingComment, commentDto);
    return this.commentRepository.save(existingComment);
  }

  async delete(id: number): Promise<void> {
    const result = await this.commentRepository.delete(id);
    if (result.affected === 0) {
    }
  }
}
