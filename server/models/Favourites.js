const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favourites extends Model { }

Favourites.init(
    {
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
                model: "beers",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "favourites",
    }
);

module.exports = Favourites;