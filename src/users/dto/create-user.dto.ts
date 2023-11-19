import { IsEmail, IsNotEmpty, IsString } from "class-validator"; //dto:data transfer object

//datadaki istediğimiz şartları tanımladık
export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;
}
