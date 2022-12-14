const { Breed, Temperament } = require('../../db');

const getDbInfo = async () => {
    return await Breed.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
}


module.exports={getDbInfo}