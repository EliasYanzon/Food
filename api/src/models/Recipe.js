const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const Recipe = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      summary: {
        //reumen de el plato
        type: DataTypes.TEXT,
        allowNull: true,
      },
      healthScore: {
        type: DataTypes.STRING,
      },
      steps: {
        //paso a paso
        type: DataTypes.TEXT,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      diets: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    { timetamps: false }
  );
};

//Exporto la funcion que define el modelo
module.exports = Recipe;
