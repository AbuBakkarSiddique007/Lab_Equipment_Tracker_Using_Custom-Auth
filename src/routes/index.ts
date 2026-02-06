import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { equipmentRoute } from "../modules/equipment/equipment.route";
import { usageLogRoute } from "../modules/usage_log/usageLog.route";

const routes = Router()

routes.use("/user", userRoute)
routes.use("/equipment", equipmentRoute)
routes.use("/usage-log", usageLogRoute)

export default routes;