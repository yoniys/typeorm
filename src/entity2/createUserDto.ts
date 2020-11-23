import { IsEmail } from "class-validator";




export class CreateUserDto{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    @IsEmail()
    email: string;
   
}