import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

/*** @models */
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

/**@relations */
User.hasMany(Image, { foreignKey: "userId" });
Image.belongsTo(User, { foreignKey: "userId" });
User.sync();
Image.sync();
  
export { Image, User };
