import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUser: RequestHandler = async (req, res) => {
    try {

        const payload = req.body;

        const user = await prisma.user.create({
            data: payload
        });

        res.status(201).json({
            message: "User created successfully",
            data: user
        })


    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error

        })

    }
}

export const userController = {
    createUser
}
