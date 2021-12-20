require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const TravelRouter = require("./controllers/travellog")

///////
// VARIABLES
//////
const PORT = process.env.PORT || 3000

///////////////////////
//CREATE APPLICATION OBJECT
//////////////////////
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

///////////
//Routes & Routers
//////////

app.get("/", (req,res) => res.send("HelloWorld!"))
app.use("/travellogs", TravelRouter)

////////
///Listener 
/////// 
app.listen(PORT, () => {console.log(`I'm listening on port ${PORT}!`)})