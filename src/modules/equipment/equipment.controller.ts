import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createEquipment: RequestHandler = async (req, res) => {
    try {
        const payload = req.body;

        const equipment = await prisma.equipment.create({
            data: payload
        })

        res.status(201).json({
            message: "Equipment created successfully",
            data: equipment
        })

    } catch (error) {
        res.status(500).json({
            message: "Equipment creation failed",
            error: error
        })
    }
}

const getEquipments: RequestHandler = async (req, res) => {
    try {

        const equipments = await prisma.equipment.findMany()

        res.status(200).json({
            message: "Equipments retrieved successfully",
            data: equipments
        })

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve equipments",
            error: error
        })
    }
}

export const equipmentController = {
    createEquipment,
    getEquipments
}