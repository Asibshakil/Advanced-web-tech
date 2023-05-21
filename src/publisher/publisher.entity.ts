import { EmployeeEntity } from 'src/employee/employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("publisher")
export class PublisherEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    address: string;

    @Column()
    filename: string;
    // @OneToMany(() => EmployeeEntity, (employee) => employee.admin)

    //     employees: EmployeeEntity[]


}