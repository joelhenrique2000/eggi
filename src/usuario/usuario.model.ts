import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
