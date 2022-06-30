import {Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';

export enum Usertype {
    USER = 'user',
    STAFF = 'staff'
}

@Entity()
export class User {
    @PrimaryColumn() userId: string;
    @Column({nullable: true, length: 100}) firstname: string;
    @Column({nullable: true, length: 100}) lastname: string;
    @Column({nullable: false, length: 100}) email: string;
    @Column({nullable: true}) usertype: Usertype;
    @CreateDateColumn() createdDate: Date;
}