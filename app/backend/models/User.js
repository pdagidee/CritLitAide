import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define( 
    'User', 
    {
        id : {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.ENUM('user', 'admin'),
            allowNull: false,
            defaultValue: 'user',
        },
    },

    {       
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        schema: 'prototype',
    }
);

export default User;