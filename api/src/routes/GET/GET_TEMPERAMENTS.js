const express = require("express")
const router = express.Router();
const {getTemperament} = require("../../Controllers/Temperament/Api_Info");
const { route } = require("./GET_DOGS");

router.get("", async (req,res)=>{

    const temp = await getTemperament();
    res.status(200).send(temp)

})

module.exports = router