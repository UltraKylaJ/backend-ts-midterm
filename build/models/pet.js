"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetFactory = exports.Pet = void 0;
const sequelize_1 = require("sequelize");
class Pet extends sequelize_1.Model {
}
exports.Pet = Pet;
function PetFactory(sequelize) {
    Pet.init({
        petId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        animal: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pets',
        freezeTableName: true,
        sequelize
    });
}
exports.PetFactory = PetFactory;
