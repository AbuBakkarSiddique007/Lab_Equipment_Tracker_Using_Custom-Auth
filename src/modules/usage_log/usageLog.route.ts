import { Router } from "express";
import { usageLogController } from "./usageLog.controller";

const router = Router()

router.post("/", usageLogController.createUsageLog)
router.get("/", usageLogController.getUsageLogs)  


export const usageLogRoute = router