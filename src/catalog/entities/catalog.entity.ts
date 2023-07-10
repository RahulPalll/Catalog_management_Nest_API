// catalog.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FabricType } from 'src/fabric_type/entities/fabric-type.entity';
import { AgeGroup } from 'src/age_groups/entities/age-group.entity';
import { Location } from 'src/location/entities/location.entity';
import { Company } from 'src/company/entities/company.entities';
import { User } from 'src/user/entities/user.entity';

@Entity('catalogs')
export class Catalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_name' })
  productName: string;

  @Column({ name: 'product_description' })
  productDescription: string;

  @ManyToOne(() => FabricType, { eager: true })
  @JoinColumn({ name: 'fabric_type_id' })
  fabricType: FabricType;

  @ManyToOne(() => AgeGroup, { eager: true })
  @JoinColumn({ name: 'age_group_id' })
  ageGroup: AgeGroup;

  @ManyToOne(() => Location, { eager: true })
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @ManyToOne(() => Company, { eager: true })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  //   @Column({ name: 'created_at' })
  //   createdAt: Date;

  //   @Column({ name: 'updated_at' })
  //   updatedAt: Date;

  //   @Column({ name: 'created_by' })
  //   createdBy: number;

  //   @Column({ name: 'updated_by' })
  //   updatedBy: number;

  // Add other columns as needed
}
