import { Attribute } from '../../attribute/entities/attribute.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('plans')
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @ManyToMany(() => Attribute, (attribute) => attribute.plans)
  @JoinTable({ name: 'planes_attributes' })
  attributes: Attribute[];
}
