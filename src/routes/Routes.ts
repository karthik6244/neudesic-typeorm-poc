import { Request, Response } from "express";
import { Controller } from "../controller/Controller";
import { CustomerController } from "../controller/CustomerController";

class Routes {
  private controller: Controller;
  private CustomerController: CustomerController;
  constructor() {
    this.controller = new Controller();
    this.CustomerController = new CustomerController();
  }
  public routes(app): void {
    app.route("/").get((request: Request, response: Response) => {
      response.status(200).send({
        message: "GET request successfully.",
      });
    });
    app
      .route("/plans")
      .get(this.controller.getAllPlans)
      .post(this.controller.addPlan);
    app
      .route("/plans/:planId")
      .get(this.controller.getPlanById)
      .put(this.controller.updatePlan);

    app.route("/getPlanByName/:planName").get(this.controller.getPlanByName);
    app.route("/getPlanByAmount/:amount").get(this.controller.getPlanByAmount);

    app.route("/customer").post(this.CustomerController.addCustomer);
    app
      .route("/CustomerPurchasePlan")
      .post(this.CustomerController.CustomerPurchasePlan);

    app
      .route("/getCustomerPurchaseHistory/:customerId")
      .get(this.CustomerController.getCustomerPurchaseHistory);
  }
}
export { Routes };
