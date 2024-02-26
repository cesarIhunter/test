import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  import { User } from '../user/user.entity';
  
  @Entity({ name: 'Rol' })
  export class Rol{
    @PrimaryGeneratedColumn()
    IdRol: number;
  
    @Column({ type: 'varchar', length: 100 })
    Name: string;
  
    @OneToOne(() => User, (user) => user.name)
    users: User;

  }
  