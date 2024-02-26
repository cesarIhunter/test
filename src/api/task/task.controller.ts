import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  @Inject(TaskService)
  private readonly service: TaskService;

  @Post()
  public createTask(@Body() body: CreateTaskDto): Promise<Task> {
    return this.service.createTask(body);
  }

  @Get()
  public findAll(){
    return this.service.findAll();
  }s

}