import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PublisherEntity } from "./publisher.entity"
import { PublisherController } from "./publisher.controller";
import { PublisherService } from "./publisher.service";
import { EmployeeService } from "src/employee/employee.service";
import { EmployeeEntity } from "src/employee/employee.entity";
import { BookService } from "src/book/book.service";
import { BookEntity } from "src/book/book.entity";
import { MailerModule } from "@nestjs-modules/mailer";



@Module({
    imports: [MailerModule.forRoot({
        transport: {
            host: 'smtp.gmail.com',
            port: 465,
            ignoreTLS: true,
            secure: true,
            auth: {
                user: 'asibulhasan.956@gmail.com',
                pass: 'password'
            },
        }
    }),
    TypeOrmModule.forFeature([PublisherEntity, EmployeeEntity, BookEntity])],
    controllers: [PublisherController],
    providers: [PublisherService, EmployeeService, BookService]
})
export class PublisherModule {

}
