import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { User } from 'src/schema/user.schema';
import { UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model <UserDocument>) {}

    async create(createUserDto: CreateUserDto): Promise <UserDocument> {
        const user = new this.userModel(createUserDto)
        return user.save()
    }

    async findAll(): Promise <UserDocument[]> {
        return this.userModel.find().exec()
    }

    async findOne(id: string) {
        return this.userModel.findById(id)
    }

    async update(id: string, updatedUserDto: UpdateUserDto): Promise <UserDocument> {
        return this.userModel.findByIdAndUpdate(id,updatedUserDto)
    }

    async remove(id: ObjectId) {
        return this.userModel.findOneAndDelete(id)
    }
}
