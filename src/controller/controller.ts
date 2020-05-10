import { Request, Response } from "express";
import { connection } from "../connection/Connection";
import Plan from "../entity/Plan";

class Controller {
  constructor() {}

  public getAllPlans(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        console.log("if");
        const plans: Plan[] = await connection.manager.find(Plan);
        console.log(plans);
        res.json(plans);
      })
      .catch((error) => {
        console.log("not if");
        console.error("Error ", error);
        res.json(error);
      });
  }
  public addPlan(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        console.log(req.body);
        let requestplan = req.body;
        let plan = new Plan();
        plan.planName = requestplan.planName;
        plan.planType = requestplan.planType;
        plan.amount = requestplan.amount;
        plan.validity = requestplan.validity;
        plan.dataAvailable = requestplan.dataAvailable;

        await connection.manager.save(plan);
        res.json({ message: "Successfully Saved." });
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }

  public updatePlan(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        console.log(req.params.planId);
        let plan = await connection.manager.findOne(Plan, req.params.planId);

        let plan1 = await connection.manager.findOne(Plan, req.params.planId);

        console.log("In DB " + JSON.stringify(plan));
        let requestPlan = req.body;
        console.log("Update Body Is " + JSON.stringify(requestPlan));
        plan.planName = requestPlan.planName;
        plan.planType = requestPlan.planType;
        plan.amount = requestPlan.amount;
        plan.validity = requestPlan.validity;
        plan.dataAvailable = requestPlan.dataAvailable;

        await connection.manager.save(plan);
        res.json({ message: "Successfully Updated." });
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }

  public getPlanById(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        let plans = await connection.manager.findOne(Plan, req.params.planId);
        res.json(plans);
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }

  public getPlanByName(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        console.log(req.params.planName);
        let plans = await Plan.findOne({ planName: req.params.planName });
        // let plans = await connection.manager.findOne({
        //   where: { planName: req.params.planName },
        // });
        res.json(plans);
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }

  public getPlanByAmount(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        console.log(req.params.amount);
        let plans = await Plan.findOne({ amount: req.params.amount });
        // let plans = await connection.manager.findOne({
        //   where: { planName: req.params.planName },
        // });
        res.json(plans);
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }
}
export { Controller };
