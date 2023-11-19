import { Body, Controller, Get, Post, Put, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getNote(@Param('id') id:string){
    return this.usersService.getNote(id)
  }

  @Post()
  async createNote(@Body() createUserDto:CreateUserDto){
    return this.usersService.insertNote(createUserDto);
  }
  @Patch(':id')
  async updateNote(@Param('id') id:string,@Body() updateUserDto:UpdateUserDto){
    return this.usersService.updateNote(id,updateUserDto)
  }

  @Delete(':id')
  async deleteNote(@Param('id') id:string){
    return this.usersService.deleteNote(id)
  }
}
