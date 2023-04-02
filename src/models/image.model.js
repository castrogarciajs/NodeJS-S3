import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

const Image = sequelize.define("Images", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


export { Image };
