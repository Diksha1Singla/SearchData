const mongoose = require("mongoose")

const BuildingModel = new mongoose.Schema({
    img: {
        type: String
    },
    Block: {
        type: String,
        required: true
    }
})

const buildModel = new mongoose.model("buildModel",BuildingModel)
module.exports = buildModel