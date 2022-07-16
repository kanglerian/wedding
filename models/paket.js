import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Paket = db.define('paket',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_paket: {
        type: DataTypes.STRING
    },
    harga: {
        type: DataTypes.INTEGER
    },
    vendor: {
        type: DataTypes.STRING
    }
});