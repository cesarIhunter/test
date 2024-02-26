import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './task.dto';
import { User } from '../user/user.entity';

@Injectable()
export class TaskService {
  @InjectRepository(Task)
  private readonly repository: Repository<Task>;


  
  public createTask(body: CreateTaskDto): Promise<Task> {
    const task : Task = new Task();
    const us : User = new User();
    
    us.id = 3;

    task.titulo = body.titulo;
    task.descripcion = body.descripcion;
    task.horasEstimadas = body.horasEstimadas;
    task.fechaVencimiento = new Date();
    task.estatus = body.estatus;
    task.usuariosAsignados = 2;
    task.costo = body.costo;
    //task.users.push(us);

    return this.repository.save(task);
  }


  public findAll(): Promise<Task[]> {
    const tasks = this.repository.find();
    return tasks;
  }

}