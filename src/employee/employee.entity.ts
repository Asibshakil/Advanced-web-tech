import { PublisherEntity } from 'src/publisher/publisher.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("employee")
export class EmployeeEntity {
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

    // @ManyToOne(() => PublisherEntity, (publisher) => publisher.employees)
    // publisher: PublisherEntity

}