const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Breed', {
    id:{
      type: DataTypes.UUID,
      allowNull:true,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span:{
      type:DataTypes.STRING,
      allowNull:true
    },
    image:{
      type:DataTypes.STRING,
      allowNull:true
    },
    createdInDb:{
      type:DataTypes.BOOLEAN,
      allowNull:true,
      defaultValue:true
    //este atributo se hace para hacer un llamado a la base de datos 
    }
  });
};
