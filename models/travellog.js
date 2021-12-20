const {Schema, model} = require("../db/connection")

const TravellogSchema = new Schema({
    country: String,
    description: String,
    image: String,
    visitAgain: Boolean,
})

const Travellog = model("Travellog", TravellogSchema)

module.exports = Travellog