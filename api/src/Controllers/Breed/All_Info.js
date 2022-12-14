const {getApiInfo} = require("./Api_Info")
const {getDbInfo} = require("./Db_Info")


const getAllInfo = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const infoTotal = apiInfo.concat(dbInfo)
    return infoTotal
}

module.exports={getAllInfo}