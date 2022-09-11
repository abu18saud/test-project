import { Column, Entity, IsNull, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class users {
    @PrimaryGeneratedColumn()
    //@Column("character varying", { length: 20 })
    id: number;
    @Column("varchar", { length: 20 , nullable: true})
    ar_name?: string;
    @Column("varchar", { length: 20 , nullable: true})
    en_name?: string;
    @Column('varchar', { default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
    created_date?: Date;
    @Column('varchar', { default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
    modified_date?: Date;
}