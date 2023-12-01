import { IsEmail, IsNotEmpty, IsString, IsInt, Min, Max } from "class-validator"; //dto:data transfer object

//datadaki istediğimiz şartları tanımladık
export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsInt()
    @Min(18)
    @Max(45)
    age:number;

}
