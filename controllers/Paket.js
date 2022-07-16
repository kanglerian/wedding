import Model from '../models/index.js'

export const getAllPaket = async (req, res) => {
  try {
    const hasil = await Model.Paket.findAll();
    res.status(200).json({
      message: 'sukses',
      data: hasil
    });
  } catch (error) {
    console.log(error)
  }
}

export const getPaket = async (req, res) => {
  try {
    const hasil = await Model.Paket.findOne({
      where: {
        id: req.params.id
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

export const updatePaket = async (req, res) => {
  try {
    await Model.Paket.update(req.body,{
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

export const addPaket = async (req, res) => {
  try {
    await Model.Paket.create(req.body);
    res.status(200).json({
      message: 'telah ditambahkan.',
    });
  } catch (error) {
    console.log(error)
  }
}

export const deletePaket = async (req, res) => {
  try {
    await Model.Paket.destroy({
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
