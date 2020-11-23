import { IsEmail, isEmail } from "class-validator";
import { User } from "src/entitys1/entitymodel";
import {Entity, PrimaryGeneratedColumn, Column,Unique, BaseEntity, JoinColumn, OneToOne} from "typeorm";

@Entity()
// @Unique(["email"])
export class pruduct extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    Description:string

    @Column()
    price: number;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    
}