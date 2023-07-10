// product-images.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductImage } from './entities/product-image.entity';
import { ProductImageDTO } from './dto/product-image.dto';
import { ProductImagesService } from './product-images.service';

@Controller('product-images')
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  @Get()
  findAll(): Promise<ProductImage[]> {
    return this.productImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductImage> {
    return this.productImagesService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() productImageDto: ProductImageDTO): Promise<ProductImage> {
    return this.productImagesService.create(productImageDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() productImageDto: ProductImageDTO,
  ): Promise<ProductImage> {
    return this.productImagesService.update(parseInt(id, 10), productImageDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.productImagesService.delete(parseInt(id, 10));
  }
}
