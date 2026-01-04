import app from "./app"
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000

async function server() {
    try {

        await prisma.$connect()
        console.log("Database Connected Successfully");


        app.listen(port, () => {
            console.log(`App is running on http://localhost:${port}`);
        })
        
    } catch (err) {
        console.error("Server failed to start:", err);

        await prisma.$disconnect()
        process.exit(1);
    }
}

server()