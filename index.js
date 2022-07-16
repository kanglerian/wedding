import express from 'express';
const app = express();
const port = 3000;

import { addDetail, deleteDetail, getAllDetail, getDetail, updateDetail } from './controllers/Detail.js';
import { addTransaksi, deleteTransaksi, getAllTransaksi, getTransaksi, updateTransaksi } from './controllers/Transaksi.js';
import { addPelanggan, deletePelanggan, getAllPelanggan, getPelanggan, updatePelanggan } from './controllers/Pelanggan.js';
import { addPaket, deletePaket, getAllPaket, getPaket, updatePaket } from './controllers/Paket.js';

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* Urutannya: add, delete, update, getOne, getAll */

app.use('/detail/addDetail', addDetail);
app.use('/detail/delete/:id', deleteDetail);
app.use('/detail/update/:id', updateDetail);
app.use('/detail/:id', getDetail);
app.use('/detail', getAllDetail);

app.use('/transaksi/addTransaksi', addTransaksi);
app.use('/transaksi/delete/:trx', deleteTransaksi);
app.use('/transaksi/update/:trx', updateTransaksi);
app.use('/transaksi/:trx', getTransaksi);
app.use('/transaksi', getAllTransaksi);

app.use('/pelanggan/addPelanggan', addPelanggan);
app.use('/pelanggan/delete/:nik', deletePelanggan);
app.use('/pelanggan/update/:nik', updatePelanggan);
app.use('/pelanggan/:nik', getPelanggan);
app.use('/pelanggan', getAllPelanggan);

app.use('/paket/addPaket', addPaket);
app.use('/paket/delete/:id', deletePaket);
app.use('/paket/update/:id', updatePaket);
app.use('/paket/:id', getPaket);
app.use('/paket', getAllPaket);

app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));