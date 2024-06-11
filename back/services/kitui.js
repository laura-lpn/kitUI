const fs = require('fs');

async function create(newKitui) {
  try {
    const styleRoot = `
    :root {
      --layout-max-width : ${newKitui.layoutMaxWidth}px;
      --layout-padding-x : ${newKitui.layoutPaddingX}px;
      --layout-padding-y : ${newKitui.layoutPaddingY}px;
      --layout-nb-columns : ${newKitui.layoutNumColumns};
      --layout-gutter : ${newKitui.layoutGutter}px;

      --color-dark-base : ${newKitui.colorDarkBase};
      --color-dark-lighter : ${newKitui.colorDarkLighter};
      --color-dark-darker : ${newKitui.colorDarkDarker};
      --color-light-base : ${newKitui.colorLightBase};
      --color-light-lighter : ${newKitui.colorLightLighter};
      --color-light-darker : ${newKitui.colorLightDarker};
      --color-accent : ${newKitui.colorAccent};

      --title-font-family : '${newKitui.titleFontFamily}', sans-serif;
      --h1-font-size : ${newKitui.h1FontSize}px;
      --h1-font-weight : ${newKitui.h1FontWeight};
      --h2-font-size : ${newKitui.h2FontSize}px;
      --h2-font-weight : ${newKitui.h2FontWeight};
      --h3-font-size : ${newKitui.h3FontSize}px;
      --h3-font-weight : ${newKitui.h3FontWeight};
      --h4-font-size : ${newKitui.h4FontSize}px;
      --h4-font-weight : ${newKitui.h4FontWeight};
      --h5-font-size : ${newKitui.h5FontSize}px;
      --h5-font-weight : ${newKitui.h5FontWeight};
      --h6-font-size : ${newKitui.h6FontSize}px;
      --h6-font-weight : ${newKitui.h6FontWeight};

      --text-font-family : '${newKitui.textFontFamily}', sans-serif;
      --text-font-size : ${newKitui.textFontSize}px;

      --button-padding-x : ${newKitui.buttonPaddingX}px;
      --button-padding-y : ${newKitui.buttonPaddingY}px;
      --button-border-radius : ${newKitui.buttonBorderRadius}px;
      --button-font-size : ${newKitui.buttonFontSize}px;
      --button-color-text: ${newKitui.buttonColorText};

      --input-padding-x : ${newKitui.inputPaddingX}px;
      --input-padding-y : ${newKitui.inputPaddingY}px;
      --input-border-radius : ${newKitui.inputBorderRadius}px;
      --input-font-size : ${newKitui.inputFontSize}px;

      --card-padding-x : ${newKitui.cardPaddingX}px;
      --card-padding-y : ${newKitui.cardPaddingY}px;
      --card-border-radius : ${newKitui.cardBorderRadius}px;
  }
  `

  const breakpoints = () => {
    let styles = '';
  
    for (let i = 1; i <= newKitui.layoutNumColumns; i++) {
      styles += `
        .col-${i} {
          grid-column: span ${i};
        }
      `;
    }
  
    newKitui.layoutBreakpoints.forEach((breakpoint) => {
      styles += `
        @media screen and (min-width: ${breakpoint.value}px) {
      `;
      for (let i = 1; i <= newKitui.layoutNumColumns; i++) {
        styles += `
          .col-${breakpoint.name}-${i} {
            grid-column: span ${i};
          }
        `;
      }
      styles += `
        }
      `;
    });
  
    return styles;
  }

  const cssBreakpoints = breakpoints();

  const styleCss = styleRoot + cssBreakpoints;

  fs.readFile('../back/css/kitwi.css', 'utf8', (readErr, data) => {
    if (readErr) {
      console.log(readErr);
      return;
    }
    const newData = styleCss + data;

    // Écrire le nouveau contenu dans un autre fichier
    fs.writeFile('../back/public/template.css', newData, function (writeErr) {
      if (writeErr) {
        console.log(writeErr);
      } else {
        console.log('ok');
      }
    });
  });

  // renvoyer au front le fichier css généré

  return true;

  } catch (error) {
    console.error('Error in kituiService.create', error);
    throw error;
  }
}



module.exports = {
  create,
};