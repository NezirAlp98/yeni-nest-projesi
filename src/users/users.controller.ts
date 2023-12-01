import { Body, Controller, Get, Post, Put, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id:string){
    return this.usersService.getUser(id)
  }

  @Post()
  async createUser(@Body() createUserDto:CreateUserDto){
    return this.usersService.insertUser(createUserDto);
  }
  @Patch(':id')
  async updateUser(@Param('id') id:string,@Body() updateUserDto:UpdateUserDto){
    return this.usersService.updateUser(id,updateUserDto)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.usersService.deleteUser(id)
  }
}
