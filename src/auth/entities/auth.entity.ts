import { users } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar", { length: 20})
    username: string;
    @ManyToOne(type => users, { eager: true, cascade: true, nullable: true })
    user?: users;
    @Column("varchar", { select: false, length: 100, nullable: true})
    hash_raw_password: string;
    @Column("varchar", { select: false, length: 100 , nullable: true})
    hash_db_password?: string;
    @Column("varchar", { length: 100 , nullable: true})
    message?: string;
    @Column('varchar', { default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
    created_date?: Date;
}

/*
{
	"username":"yahya",
	"hash_raw_password":"12345678"
}
*/