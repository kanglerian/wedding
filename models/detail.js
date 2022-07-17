import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Detail = db.define('detail',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paket: {
        type: DataTypes.INTEGER
    },
    no_trx: {
        type: DataTypes.STRING
    },
    nama_paket: {
        type: DataTypes.STRING
    },
    harga: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default Detail;