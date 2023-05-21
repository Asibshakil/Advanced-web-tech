
import { IsInt, IsNotEmpty, Length, IsEmail, IsString } from "class-validator";

export class PublisherForm {
    @IsNotEmpty({ message: "Your Name is required to complete Registration" })
    @IsString()
    name: string;

    @IsNotEmpty({ message: "Password Required" })
    @IsInt()
    password: string;

    @IsNotEmpty({ message: "Email is must to complete Registration" })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: "Address is must to complete Registration" })
    @IsString()
    address: string;

    @IsNotEmpty({ message: "File is must to complete Registration" })
     @IsString()
     filename: string;

}