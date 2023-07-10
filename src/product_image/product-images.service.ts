// product-images.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductImage } from './entities/product-image.entity';
import { ProductImageDTO } from './dto/product-image.dto';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
  ) {}

  findAll(): Promise<ProductImage[]> {
    return this.productImageRepository.find();
  }

  findOne(id: number): Promise<ProductImage> {
    return this.productImageRepository
      .createQueryBuilder('productImage')
      .leftJoinAndSelect('productImage.catalog', 'catalog')

      .where('productImage.id = :id', { id })
      .getOne();
  }

  create(productImageDto: ProductImageDTO): Promise<ProductImage> {
    const productImage: ProductImage =
      this.productImageRepository.create(productImageDto);
    return this.productImageRepository.save(productImage);
  }

  async update(
    id: number,
    productImageDto: ProductImageDTO,
  ): Promise<ProductImage> {
    const existingProductImage = await this.productImageRepository.findOne({
      where: { id: id },
    });
    if (!existingProductImage) {
      // Handle error, product image not found
    }

    this.productImageRepository.merge(existingProductImage, productImageDto);
    return this.productImageRepository.save(existingProductImage);
  }

  async delete(id: number): Promise<void> {
    const result = await this.productImageRepository.delete(id);
    if (result.affected === 0) {
      // Handle error, product image not found
    }
  }
}
