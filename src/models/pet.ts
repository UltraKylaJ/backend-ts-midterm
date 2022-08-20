import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>> {
    declare petId: number;
    declare name: string;
    declare imgUrl: string;
    declare animal: string;
    declare description: string;
}

export function PetFactory(sequelize: Sequelize) {
    Pet.init({
        petId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        animal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pets',
        freezeTableName: true,
        sequelize
    });
}
