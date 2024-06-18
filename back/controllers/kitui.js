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


module.exports = {
  create,
};