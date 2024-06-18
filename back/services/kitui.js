const fs = require('fs');

async function create(newKitui) {
  try {

    const fonts = [
      {
        name: 'Roboto',
        import: "@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');"
      },
      {
        name: 'Poppins',
        import: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');"
      },
      {
        name: 'Lato',
        import: "@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');"
      },
      {
        name: 'Ubuntu',
        import: "@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');"
      },
      {
        name: 'Rubik',
        import: "@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');"
      },
      {
        name: 'Playfair Display',
        import: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');"
      },
      {
        name: 'Quicksand',
        import: "@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');"
      },
      {
        name: 'Nunito',
        import: "@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');"
      },
      {
        name: 'Montserrat',
        import: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');"
      },
      {
        name: 'Raleway',
        import: "@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');"
      },
      {
        name: 'Fira code',
        import: "@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');"
      }
    ]

    const fontTitleImport = fonts.find(font => font.name === newKitui.typography.fontFamily.title).import;
    const fontTextImport = fonts.find(font => font.name === newKitui.typography.fontFamily.text).import;

    imports = fontTextImport === fontTitleImport ? fontTextImport : fontTextImport + fontTitleImport;

    const styleRoot = `
    ${imports}
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

return "http://localhost:3000/template.css";

  } catch (error) {
    console.error('Error in kituiService.create', error);
    throw error;
  }
}



module.exports = {
  create,
};