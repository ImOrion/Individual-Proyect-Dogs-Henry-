const express = require("express")
const router = express.Router();
const {getAllInfo} = require("../../Controllers/Breed/All_Info.js")

 router.get("/:id", async(req,res)=>{
    const id = req.params.id
    try {
        const idBreed = await getAllInfo()
            // const filterBreedById = await idBreed.filter(dog => dog.id === parseInt(id))
            const filterBreedById = await idBreed.filter(dog => dog.id == id)
            if(filterBreedById.length)res.status(200).send(filterBreedById)
            else throw("no existe pa")
            // filterBreedById ?
            // res.status(200).send(filterBreedById) :
            // res.status(404).send('There is no breed with that ID')
    } 
    catch (error) {
        res.status(404).send(error)
    }
})

module.exports=router