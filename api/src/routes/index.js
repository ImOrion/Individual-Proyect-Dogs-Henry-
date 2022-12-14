const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogs = require("./GET/GET_DOGS")
const getIdR = require("./GET/GET_DOG_IDRAZA")
const getTemp = require("./GET/GET_TEMPERAMENTS")
const postDog = require("./POST/POST_DOGS")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
  router.use("/dogs",getAllDogs)
  router.use("/dogs",getIdR)
  router.use("/temperaments",getTemp)
  router.use("/dogs",postDog)
  
module.exports = router;
