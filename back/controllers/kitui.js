const kituiService = require('../services/kitui');

async function create(req, res) {
  const kitui = await kituiService.create(req.body);
  console.log(req.body);
  console.log(kitui);
  if (kitui)
    res.status(201).json({ message: "Kitui créé", path: kitui });
  else
    res.status(400).json({ message: "Erreur lors de l'insertion" });
}

async function download(req, res) {
  try {
    await kituiService.download(res);
  } catch (error) {
    console.error('Error in kituiController.download', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


module.exports = {
  create,
  download
};