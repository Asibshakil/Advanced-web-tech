
import { IsNotEmpty, IsInt, Length, IsString } from "class-validator";

export class PublisherFormUpdate {

    @IsNotEmpty()
    @IsString()
    name: string;
}