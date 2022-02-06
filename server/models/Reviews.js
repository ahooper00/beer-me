const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reviews extends Model { }

Reviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    beer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "beer",
        key: "id",
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reviews",
  }
);

module.exports = Reviews;