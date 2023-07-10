// product-image.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Catalog } from 'src/catalog/entities/catalog.entity';

@Entity('product_image')
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'created_by' })
  createdBy: number;

  @Column({ name: 'updated_by' })
  updatedBy: number;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @ManyToOne(() => Catalog, { eager: true })
  @JoinColumn({ name: 'catalog_id' })
  catalog: Catalog;

  // Add other columns as needed
}
