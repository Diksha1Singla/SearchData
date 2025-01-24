const location = require("../model/LocationModel")
const building = require("../model/BuildingModel")
const fetchLocation = async(req,res)=>{
    try {
        const response = await location.find() ;
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

const fetchBuilding = async(req,res)=>{
    try {
        const response = await building.find();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {fetchLocation,fetchBuilding}