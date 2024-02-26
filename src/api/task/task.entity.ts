import { Entity, PrimaryGeneratedColumn, ManyToOne , OneToMany, JoinColumn, Column, CreateDateColumn, UpdateDateColumn , OneToOne } from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { User } from '../user/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 , nullable: true })
  public titulo: string;

  @Column({ type: 'varchar', length: 120 , nullable: true  })
  public descripcion: string;

  @Column({ nullable: true })
  public horasEstimadas: number;

  @Column({ nullable: true, type: 'date' })
  fechaVencimiento: Date;

  @Column({ type: 'varchar', length: 35  , nullable: true })
  public estatus: string;

  @Column({ nullable: true })
  usuariosAsignados: number;

  @Column({ nullable: true })
  costo: number;

  @OneToMany(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'id' })
  users: User[];

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
