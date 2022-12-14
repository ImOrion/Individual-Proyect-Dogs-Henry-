const express = require("express")
const router = express.Router();
const {getAllInfo} = require("../../Controllers/Breed/All_Info")


 router.get("", async (req, res) => {
    const name = req.query.name;
    let allDogs = await getAllInfo();
    try {
      if (name) {//name=""||name = null, undiefined, false, 0
        let dogsName = await allDogs.filter((ele) =>
          ele.name.toLowerCase().includes(name.toLowerCase())
        );
  
        if (dogsName.length) res.status(200).send(dogsName);
        else throw new Error("Que busca pirobo");
      } else {
        res.status(200).send(allDogs);
      }
    } catch (err) {
      res.status(404).send(err.message);
    }
  });

module.exports=router