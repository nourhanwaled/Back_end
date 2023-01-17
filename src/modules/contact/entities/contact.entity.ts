import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column()
  description: string;
}
