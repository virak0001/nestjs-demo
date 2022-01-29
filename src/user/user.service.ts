import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repo: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
    return this.repo.save(createUserDto);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  async getUserByEmail(email: string): Promise<any> {
    const user = await this.repo.findOne({ email });
    if (!user) {
      new BadRequestException('User not found');
    }
    return user;
  }
}
