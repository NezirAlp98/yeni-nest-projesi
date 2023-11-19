import { IsNotEmpty, IsString } from "class-validator"; //dto:data transfer object

//datadaki istediğimiz şartları tanımladık
export class CreateNoteDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    content:string;
}
