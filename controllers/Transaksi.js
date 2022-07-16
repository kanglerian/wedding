import Model from '../models/index.js'

export const getAllTransaksi = async (req, res) => {
  try {
    const hasil = await Model.Transaksi.findAll();
    res.status(200).json({
      message: 'sukses',
      data: hasil
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
    await Model.Transaksi.update(req.body,{
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
  try {
    await Model.Transaksi.create(req.body);
    res.status(200).json({
      message: 'telah ditambahkan.',
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
