import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  Column,
} from "typeorm";
import { CustomerPlan } from "./CustomerPlan";

@Entity()
export class Plan extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  planName: string;

  @Column({ type: "boolean", default: false })
  planType: string;

  @Column({ type: "decimal" })
  amount: string;

  @Column("text")
  validity: string;

  @Column("text")
  dataAvailable: string;

  @OneToMany(() => CustomerPlan, (customer_plans) => customer_plans.plan_id)
  customer_plans: CustomerPlan[];
}
export default Plan;
