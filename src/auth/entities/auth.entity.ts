import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar", { length: 20})
    username: string;
    @Column("varchar", { select: false, length: 100, nullable: true})
    hash_raw_password: string;
    @Column("varchar", { select: false, length: 100 , nullable: true})
    hash_db_password?: string;
    @Column("varchar", { length: 100 , nullable: true})
    message?: string;
    @Column('varchar', { default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
    created_date?: Date;
}