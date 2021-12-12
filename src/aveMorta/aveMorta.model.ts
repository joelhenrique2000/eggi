import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AveMorta {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  incubadora: string;

  @Column('float')
  temperatura: number;

  @Column('float')
  quantidade: number;

  @Column()
  createdAt: Date;
}
