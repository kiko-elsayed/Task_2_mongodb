const express = require ("express")

const app = express()
const port = process.env.port || 3000

require("./db/mongoose")

app.use(express.json())

const carRouter = require('./routers/car')

app.use(carRouter)

app.listen(port , ()=>{
    console.log("Server is running on port " + port)
})