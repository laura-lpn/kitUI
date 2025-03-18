const fs = require('fs');
const path = require('path');
const generateCSS = require('../utiles/generateCSS');

async function create(newKitui) {

  const styleCss = generateCSS(newKitui);

  try {
  fs.readFile('../back/css/kitwi.css', 'utf8', (readErr, data) => {
    if (readErr) {
      console.log(readErr);
      return;
    }
    const newData = styleCss + data;

    // Écrire le nouveau contenu dans un autre fichier
    fs.writeFile('../back/files/template.css', newData, function (writeErr) {
      if (writeErr) {
        console.log(writeErr);
      } else {
        console.log('ok');
      }
    });
  });

  // renvoyer au front le fichier css généré

return "http://backend.kitui.lauralpn.fr/template.css";

  } catch (error) {
    console.error('Error in kituiService.create', error);
    throw error;
  }
}

async function download(res) {
  try {
    const filePath = path.join(__dirname, '../files/template.css');
    res.download(filePath, 'template.css', (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur lors du téléchargement du fichier CSS");
      }
    });
  } catch (error) {
    console.error('Error in kituiService.download', error);
    throw error;
  }
}



module.exports = {
  create,
  download
};