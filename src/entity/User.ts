import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  confirmed: string;

  @Column({ type: "varchar", length: "230" })
  firstName: string;

  @Column("text")
  lastName: string;

  @Column("text")
  age: number;
}
export default User;
