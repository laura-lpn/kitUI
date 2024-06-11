const fs = require('fs');

async function create(newKitui) {
  try {
    const styleRoot = `
    :root {
      --layout-max-width : ${newKitui.layout.maxWidth}px;
      --layout-padding-x : ${newKitui.layout.padding.x}px;
      --layout-padding-y : ${newKitui.layout.padding.y}px;
      --layout-nb-columns : ${newKitui.layout.numColumns};
      --layout-gutter : ${newKitui.layout.gutter}px;

      --color-dark-base : ${newKitui.colors.dark.base};
      --color-dark-lighter : ${newKitui.colors.dark.lighter};
      --color-dark-darker : ${newKitui.colors.dark.darker};
      --color-light-base : ${newKitui.colors.light.base};
      --color-light-lighter : ${newKitui.colors.light.lighter};
      --color-light-darker : ${newKitui.colors.light.darker};
      --color-accent : ${newKitui.colors.accent};

      --title-font-family : '${newKitui.typography.fontFamily.title}', sans-serif;
      --h1-font-size : ${newKitui.typography.style.h1.size}px;
      --h1-font-weight : ${newKitui.typography.style.h1.weight};
      --h2-font-size : ${newKitui.typography.style.h2.size}px;
      --h2-font-weight : ${newKitui.typography.style.h2.weight};
      --h3-font-size : ${newKitui.typography.style.h3.size}px;
      --h3-font-weight : ${newKitui.typography.style.h3.weight};
      --h4-font-size : ${newKitui.typography.style.h4.size}px;
      --h4-font-weight : ${newKitui.typography.style.h4.weight};
      --h5-font-size : ${newKitui.typography.style.h5.size}px;
      --h5-font-weight : ${newKitui.typography.style.h5.weight};
      --h6-font-size : ${newKitui.typography.style.h6.size}px;
      --h6-font-weight : ${newKitui.typography.style.h6.weight};

      --text-font-family : '${newKitui.typography.fontFamily.text}', sans-serif;
      --text-font-size : ${newKitui.typography.style.text}px;

      --button-padding-x : ${newKitui.buttons.padding.x}px;
      --button-padding-y : ${newKitui.buttons.padding.y}px;
      --button-border-radius : ${newKitui.buttons.borderRadius}px;
      --button-font-size : ${newKitui.buttons.fontSize}px;
      --button-color-text: ${newKitui.buttons.colorText};

      --input-padding-x : ${newKitui.inputs.padding.x}px;
      --input-padding-y : ${newKitui.inputs.padding.y}px;
      --input-border-radius : ${newKitui.inputs.borderRadius}px;
      --input-font-size : ${newKitui.inputs.fontSize}px;

      --card-padding-x : ${newKitui.cards.padding.x}px;
      --card-padding-y : ${newKitui.cards.padding.y}px;
      --card-border-radius : ${newKitui.cards.borderRadius}px;
  }
  `

  const breakpoints = () => {
    let styles = '';
  
    for (let i = 1; i <= newKitui.layout.numColumns; i++) {
      styles += `
        .col-${i} {
          grid-column: span ${i};
        }
      `;
    }
  
    newKitui.layout.breakpoints.forEach((breakpoint) => {
      styles += `
        @media screen and (min-width: ${breakpoint.value}px) {
      `;
      for (let i = 1; i <= newKitui.layout.numColumns; i++) {
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