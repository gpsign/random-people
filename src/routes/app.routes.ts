import { peopleControllers } from "../controllers/people.controllers";
import errorHandler from "../middlewares/errorHandler.middlewares";
import { Router } from "express";
import { validatePeople } from "../middlewares/validatePerson.middlewares";

const appRouter = Router();

appRouter.post("/person", validatePeople, peopleControllers.create);
appRouter.get("/person", peopleControllers.read);
appRouter.use(errorHandler);

export default appRouter;
