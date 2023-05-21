import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisherModule } from './publisher/publisher.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module'
import { BookModule } from './book/book.module'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [PublisherModule, EmployeeModule, BookModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'OBSMS1',
      autoLoadEntities: true,
      synchronize: true,
    }
  ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
      serveRoot: '/public/' //last slash was important
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
