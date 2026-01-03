import app from "./app"

const port = process.env.PORT || 5000

function server() {
    app.get("/", async(req, res) => {
        res.status(200).send("Server Is Running!");
    })


    app.listen(port, () => {
        console.log(`App is running on ${port} Port`);
    })
}

server()