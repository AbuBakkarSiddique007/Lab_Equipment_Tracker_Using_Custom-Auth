import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { equipmentRoute } from "../modules/equipment/equipment.route";

const routes = Router()

routes.use("/user", userRoute)
routes.use("/equipment", equipmentRoute)

export default routes;