// location.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pincode: string;

  @Column({ name: 'address_line_1' })
  addressLine1: string;

  @Column({ name: 'address_line_2' })
  addressLine2: string;

  @Column()
  landmark: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  // Add other columns as needed
}
