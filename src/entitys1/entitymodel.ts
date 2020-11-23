import { IsEmail, isEmail } from "class-validator";
import { pruduct } from "src/entity2/entitymodel";
import {Entity, PrimaryGeneratedColumn, Column,Unique, BaseEntity, JoinColumn, OneToOne} from "typeorm";

@Entity()
@Unique(["email"])
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    @IsEmail()
    email: string;
    
}