const generateFont = (titleFont, textFont) => {
  let imports = '';

  const fontTitleImport = getCssImportGoogleFont(titleFont);
  const fontTextImport = getCssImportGoogleFont(textFont);

  imports = titleFont === textFont ? fontTextImport : fontTextImport + '\n' + fontTitleImport + '\n';

  return imports;
}

function getCssImportGoogleFont(fontFamily) {
  return `@import url('https://fonts.googleapis.com/css2?family=${fontFamily.replaceAll(
    " ",
    "+"
  )}:wght@100;200;300;400;500;600;700;800;900&display=swap');`;
}

module.exports = generateFont;