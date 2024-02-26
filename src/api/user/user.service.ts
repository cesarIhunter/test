import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { Rol } from '../rol/rol.entity';
import { createQueryBuilder, Repository } from 'typeorm';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public getUser(id: number): Promise<User> {
    return this.repository.createQueryBuilder('User')
    .innerJoinAndSelect('User.tasks', 'tasks')
    .getOne();
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();
    const rol : Rol =  new Rol();

    rol.IdRol = body.idRol;
    rol.Name = body.name;

    user.name = body.name;
    user.email = body.email;
    user.idRol = rol;
    return this.repository.save(user);
  }

  public findAll(): Promise<User[]> {
    const users = this.repository.find();
    return users;
  }
}
