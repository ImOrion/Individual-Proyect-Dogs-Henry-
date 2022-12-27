const {getApiInfo} = require("./Api_Info")
const {getDbInfo} = require("./Db_Info")


const getAllInfo = async () => {
    const apiInfo = await getApiInfo()
    let dbInfo = await getDbInfo()
    
    dbInfo = await dbInfo.map((d) => {
        return {
          id: d.dataValues.id,
          name: d.dataValues.name,
          min_height: d.dataValues.min_height,
          max_height: d.dataValues.max_height,
          min_weight: d.dataValues.min_weight,
          max_weight: d.dataValues.max_weight,
          life_span: d.dataValues.life_span,
          image: d.dataValues.image,
          createdInDb: d.dataValues.createdInDb,
          temperament: d.dataValues.Temperaments.map( t => t.name ).join(", "),
          
        };
      });
    const infoTotal = apiInfo.concat(dbInfo)
    console.log("esto",dbInfo)
    return infoTotal
}

module.exports={getAllInfo}