import { Module } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { UserController } from "src/user/user.controller";
import { User, UserSchema } from "src/schema/user.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            }
        ])
    ],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule {}