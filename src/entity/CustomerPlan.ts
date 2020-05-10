import {
  Entity,
  PrimaryColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Plan } from "./Plan";
import { Customer } from "./Customer";

@Entity()
export class CustomerPlan extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  customerId: number;
  @ManyToOne(() => Customer, (customer_id) => customer_id.customer_plans)
  @JoinColumn({ name: "customerId" })
  customer_id: Customer;

  @PrimaryColumn()
  planId: number;
  @ManyToOne(() => Plan, (plan_id) => plan_id.customer_plans)
  @JoinColumn({ name: "planId" })
  plan_id: Plan;
}
export default CustomerPlan;
