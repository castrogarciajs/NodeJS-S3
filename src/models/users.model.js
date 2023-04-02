import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

const User = sequelize.define("Users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync();
export { User };
