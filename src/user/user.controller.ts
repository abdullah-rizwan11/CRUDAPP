import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import mongoose, { ObjectId } from 'mongoose';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto : CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Put(":id")
    update(@Param('id') id : string, @Body() updatedUserDto: UpdateUserDto) {
        return this.userService.update(id, updatedUserDto)
    }

    @Delete(':id') 
    remove(@Param('id') id: ObjectId) {
        return this.userService.remove(id)
    }
}