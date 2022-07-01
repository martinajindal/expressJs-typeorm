import {Column, Entity, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {User} from './User'
export enum Usertype {
    USER = 'user',
    STAFF = 'staff'
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid') orderId: string;
    @Column({nullable: true, length: 100}) itemType: string;
    @Column({nullable: true, length: 100}) orderStatus: string;
    @CreateDateColumn() createdDate: Date;

    @ManyToOne(type => User, user => user.orders, {
        eager: false,
        cascade: false,
        nullable: false
    })
    user: User;
}