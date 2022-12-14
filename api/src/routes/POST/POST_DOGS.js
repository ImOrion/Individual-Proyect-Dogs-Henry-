const express = require("express");
const {Breed,Temperament} = require("../../db");
const router = express.Router();

router.post("", async(req,res)=>{
    const {name,min_height,max_height,min_weight,max_weight,life_span,image,createdInDb,temperament} = req.body
    const dogCreated = await Breed.create({
        name,min_height,max_height,min_weight,max_weight,life_span,image,createdInDb
    })
    const dogTemp = await Temperament.findAll({
        where:{
            name:temperament
        }
    })
    await dogCreated.addTemperament(dogTemp)
    res.status(201).send("Ya está mi papá")
})

module.exports=router