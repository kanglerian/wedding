import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Transaksi = db.define('transaksi',{
    no_trx: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_pelanggan: {
        type: DataTypes.STRING
    },
    tanggal: {
        type: DataTypes.DATE
    },
    keterangan: {
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default Transaksi;