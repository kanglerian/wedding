import Paket from '../models/paket.js'
import Detail from '../models/detail.js'
import Pelanggan from '../models/pelanggan.js'
import Transaksi from '../models/transaksi.js'
const Model = {};

Model.Paket = Paket;
Model.Pelanggan = Pelanggan;
Model.Transaksi = Transaksi;
Model.Detail = Detail;

Pelanggan.hasMany(Transaksi, {foreignKey: 'id_pelanggan'});
Transaksi.belongsTo(Pelanggan, {foreignKey: 'id_pelanggan'});

export default Model;