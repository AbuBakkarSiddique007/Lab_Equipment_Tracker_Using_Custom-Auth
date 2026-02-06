import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const router = Router()

router.post("/", equipmentController.createEquipment)
router.get("/", equipmentController.getEquipments)


export const equipmentRoute = router