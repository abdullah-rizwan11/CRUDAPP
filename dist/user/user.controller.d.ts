/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import mongoose, { ObjectId } from 'mongoose';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../schema/user.schema").UserDocument>;
    findAll(): Promise<import("../schema/user.schema").UserDocument[]>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, import("../schema/user.schema").UserDocument> & import("../schema/user.schema").User & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
    update(id: string, updatedUserDto: UpdateUserDto): Promise<import("../schema/user.schema").UserDocument>;
    remove(id: ObjectId): Promise<mongoose.Document<unknown, {}, import("../schema/user.schema").UserDocument> & import("../schema/user.schema").User & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
}
