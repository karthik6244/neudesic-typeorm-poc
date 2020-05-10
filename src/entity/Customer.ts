import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  Column,
} from "typeorm";
import { CustomerPlan } from "./CustomerPlan";

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  customerName: string;

  @OneToMany(() => CustomerPlan, (customer_plans) => customer_plans.customer_id)
  customer_plans: CustomerPlan[];
}
export default Customer;
