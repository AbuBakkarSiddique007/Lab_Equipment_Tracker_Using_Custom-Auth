import express from "express"
import cors from "cors"
import { userRoute } from "./modules/user.route"
import routes from "./routes"

const app = express()
app.use(cors())
app.use(express.json())


app.use("/api/v1", routes)



app.get("/", async (req, res) => {
    res.status(200).send("Server Is Running!");
})

export default app;