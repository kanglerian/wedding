import Model from '../models/index.js'

export const getAllTransaksi = async (req, res) => {
  try {
    const hasil = await Model.Transaksi.findAll({
      include: [
        { model: Model.Pelanggan },
      ],
    });
    res.render('pages/transaksi', {
      layout: 'layouts/dashboard',
      title: 'Transaksi',
      data: hasil,
      url: req.originalUrl
    });
  } catch (error) {
    console.log(error)
  }
}

export const getTransaksi = async (req, res) => {
  try {
    const hasil = await Model.Transaksi.findOne({
      where: {
        no_trx: req.params.trx
      }
    });
    res.status(200).json({
      message: 'sukses',
      data: hasil
    });
  } catch (error) {
    console.log(error)
  }
}

export const updateTransaksi = async (req, res) => {
  try {
    await Model.Transaksi.update(req.body, {
      where: {
        no_trx: req.params.trx
      }
    });
    res.status(200).json({
      message: 'telah diperbarui.',
    });
  } catch (error) {
    console.log(error)
  }
}

export const addTransaksi = async (req, res) => {
  // try {
  //   await Model.Transaksi.create(req.body);
  //   res.status(200).json({
  //     message: 'telah ditambahkan.',
  //   });
  // } catch (error) {
  //   console.log(error)
  // }
  let data = {
    no_trx: req.body.no_trx,
    tanggal: req.body.tanggal,
    id_pelanggan: req.body.id_pelanggan,
  }
  var detail = [];
  for (let i = 0; i < req.body.id_paket.length; i++) {
    var obj = {
      no_trx: req.body.no_trx,
      id_paket: req.body.id_paket[i],
      nama_paket: req.body.nama_paket[i],
      harga: "2000"
    };
    detail.push(obj);
  }
  try {
    await Model.Transaksi.create(data);
    await Model.Detail.bulkCreate(detail);
    const dataHasil = await Model.Transaksi.findAll();
    const detailHasil = await Model.Detail.findAll();
    res.status(200).json({
      message: 'telah ditambahkan.',
      data: dataHasil,
      detail: detailHasil
    });
  } catch (error) {
    console.log(error)
  }
}

export const deleteTransaksi = async (req, res) => {
  try {
    await Model.Transaksi.destroy({
      where: {
        no_trx: req.params.trx
      }
    });
    res.status(200).json({
      message: 'Telah dihapus.',
    });
  } catch (error) {
    console.log(error)
  }
}
