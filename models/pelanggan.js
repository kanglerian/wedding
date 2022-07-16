import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Pelanggan = db.define('pelanggan',{
    nik: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nama_lengkap: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    no_whatsapp: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default Pelanggan;