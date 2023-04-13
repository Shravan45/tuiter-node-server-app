import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = "mongodb+srv://giuseppi:supersecretpassword@cluster93263.2ooc8kw.mongodb.net/?retryWrites=true&w=majority"
 || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);


const app = express()
app.use(cors())
app.use(express.json())

HelloController(app)
UsersController(app)
TuitsController(app)


app.listen(process.env.PORT || 4000)