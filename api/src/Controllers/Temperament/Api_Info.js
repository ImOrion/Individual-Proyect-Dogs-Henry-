const axios = require("axios");
const {apikey} = process.env;
const {Temperament}=require("../../db")

const getTemperament = async()=>{

    const apiUrl/*{[{}{}...]}*/  = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`);
    const apiInfo = await apiUrl.data
    const tempApi = apiInfo.map(temp=>temp.temperament).join().split(",").sort()
    await tempApi
    .filter((temp, index) => tempApi.indexOf(temp) === index)
    .forEach(tempDog=>{
        tempDog.trim()!==""&&
        Temperament.findOrCreate({
            where:{
                name:tempDog.trim()
            }
        })
    })
    const apiTemp = Temperament.findAll()
    return apiTemp
}

module.exports = {getTemperament}