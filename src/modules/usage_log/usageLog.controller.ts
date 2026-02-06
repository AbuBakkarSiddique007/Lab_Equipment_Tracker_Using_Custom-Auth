import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog: RequestHandler = async (req, res) => {
    try {

        const payload = req.body;
        const usageLog = await prisma.usageLog.create({
            data: payload
        })

        res.status(201).json({
            message: "Usage log created successfully",
            data: usageLog
        })

    } catch (error) {
        res.status(500).json({
            message: "Usage log creation failed",
            error: error
        })
    }
}


const getUsageLogs: RequestHandler = async (req, res) => {
    try {

        const usageLogs = await prisma.usageLog.findMany({
            include : {
                user: true,
                equipment: true
            }
        })

        res.status(200).json({
            message: "Usage logs retrieved successfully",
            data: usageLogs
        })

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve usage logs",
            error: error
        })
    }
}

export const usageLogController = {
    createUsageLog,
    getUsageLogs
}