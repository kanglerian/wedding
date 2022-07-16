import Model from '../models/index.js'

export const getAllDetail = async (req, res) => {
  try {
    const hasil = await Model.Detail.findAll();
    res.status(200).json({
      message: 'sukses',
      data: hasil
    });
  } catch (error) {
    console.log(error)
  }
}

export const getDetail = async (req, res) => {
  try {
    const hasil = await Model.Detail.findAll({
      where: {
        no_trx: req.params.trx
      }
    });
    res.render('pages/detail', {
      layout: 'layouts/dashboard',
      title: 'Detail',
      data: hasil,
      url: req.originalUrl
    });
  } catch (error) {
    console.log(error)
  }
}

export const updateDetail = async (req, res) => {
  try {
    await Model.Detail.update(req.body,{
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({
      message: 'telah diperbarui.',
    });
  } catch (error) {
    console.log(error)
  }
}

export const addDetail = async (req, res) => {
  try {
    await Model.Detail.create(req.body);
    res.status(200).json({
      message: 'telah ditambahkan.',
    });
  } catch (error) {
    console.log(error)
  }
}

export const deleteDetail = async (req, res) => {
  try {
    await Model.Detail.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({
      message: 'Telah dihapus.',
    });
  } catch (error) {
    console.log(error)
  }
}
