import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('parteners')
export class Partener {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;
}
