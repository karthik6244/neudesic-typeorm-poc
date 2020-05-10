import { createConnection } from "typeorm";
import Customer from "../entity/Customer";
import Plan from "../entity/Plan";
import User from "../entity/User";
import CustomerPlan from "../entity/CustomerPlan";

export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432, // default port of postgres
  username: "postgres", // our created username, you can have your own user name
  password: "postgres", // our created username, you can have your own password
  database: "MobilePlans", // our created database name, you can have your own
  entities: [
    // typeORM will not be able to create database table if we forget to put entity class name here..
    Customer,
    Plan,
    User,
    CustomerPlan,
  ],
  synchronize: true,
  logging: false,
});
