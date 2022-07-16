import Model from '../models/index.js'

export const getAllPelanggan = async (req, res) => {
  try {
    const hasil = await Model.Pelanggan.findAll();
    res.render('pages/pelanggan', {
      layout: 'layouts/dashboard',
      title: 'Pelanggan',
      data: hasil,
      url: req.originalUrl
    });
  } catch (error) {
    console.log(error)
  }
}

export const getPelanggan = async (req, res) => {
  try {
    const hasil = await Model.Pelanggan.findOne({
      where: {
        nik: req.params.nik
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

export const updatePelanggan = async (req, res) => {
  try {
    await Model.Pelanggan.update(req.body,{
      where: {
        nik: req.body.niklama
      }
    });
    res.status(200).json({
      message: 'telah diperbarui.',
    });
  } catch (error) {
    console.log(error)
  }
}

export const addPelanggan = async (req, res) => {
  try {
    await Model.Pelanggan.create(req.body);
    res.status(200).json({
      message: 'telah ditambahkan.',
    });
  } catch (error) {
    console.log(error)
  }
}

export const deletePelanggan = async (req, res) => {
  try {
    await Model.Pelanggan.destroy({
      where: {
        nik: req.body.nik
      }
    });
    res.status(200).json({
      message: 'Telah dihapus.',
    });
  } catch (error) {
    console.log(error)
  }
}
