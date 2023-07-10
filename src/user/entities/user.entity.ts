import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  mobile_number: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['admin', 'user'] })
  role: string;

  @Column()
  company_id: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
