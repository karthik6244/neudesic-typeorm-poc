import { Request, Response } from "express";
import { connection } from "../connection/Connection";
import Plan from "../entity/Plan";
import Customer from "../entity/Customer";
import CustomerPlan from "../entity/CustomerPlan";
import { createConnection } from "typeorm";
import { getRepository } from "typeorm";

class CustomerController {
  constructor() {}

  public addCustomer(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        console.log(req.body);
        let requestCustomer = req.body;
        let customer = new Customer();
        customer.customerName = requestCustomer.customerName;

        await connection.manager.save(customer);
        res.json({ message: "Customer Successfully Registered." });
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }

  public CustomerPurchasePlan(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        console.log(req.body);
        let requestCustomerPlan = req.body;
        let customerplan = new CustomerPlan();
        customerplan.customerId = requestCustomerPlan.customerId;
        customerplan.planId = requestCustomerPlan.planId;

        await connection.manager.save(customerplan);
        res.json({ message: "Customer Successfully Purchased Plan." });
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }
  public getCustomerPurchaseHistory(req: Request, res: Response) {
    connection.then(async (conn) => {
      console.log(req.params.customerId);
      const customer = await conn
        .getRepository("Customer")
        .createQueryBuilder("Customer")
        .leftJoinAndSelect("Customer.customer_plans", "CustomerPlan")
        .leftJoinAndSelect("CustomerPlan.plan_id", "Plan")
        .where("Customer.id = :id", { id: req.params.customerId })
        .getOne();
      res.json(customer);
    });
    /*
    Working Code below
    connection.then(async (conn) => {
      const customerRepository = conn.getRepository(Customer);
      let c = await customerRepository.find({
        select: ["customerName"],
        relations: ["customer_plans"],
        where: {
          id: 2,
        },
      });
      res.json(c);
    });
*/
    //     const customerRepository = getRepository(Customer); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    // const user = await customerRepository.findOne(2);
  }
}

export { CustomerController };
