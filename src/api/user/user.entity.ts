import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, Column, ManyToOne,CreateDateColumn, UpdateDateColumn , OneToOne } from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { Task } from '../task/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @OneToOne(() => Rol, (rol) => rol.users)
  @JoinColumn({ name: 'IdRol' })
  idRol: Rol;
  
  @ManyToOne(() => Task, (task) => task.users)
  tasks: Task[] ;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
