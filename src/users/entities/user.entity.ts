import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar", { length: 20 })
    ar_name: string;
    @Column("varchar", { length: 20 })
    en_name?: string;
    @Column('timestamp', { default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
    created_date?: Date;
    @Column('timestamp', { default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
    modified_date?: Date;
}