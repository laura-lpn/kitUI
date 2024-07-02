const generateRoot = (data) => {
  const RootCss = `
:root {
--layout-max-width : ${data.layout.maxWidth}px;
--layout-padding-x : ${data.layout.padding.x}px;
--layout-padding-y : ${data.layout.padding.y}px;
--layout-nb-columns : ${data.layout.numColumns};
--layout-gutter : ${data.layout.gutter}px;

--color-dark-base : ${data.colors.dark.base};
--color-dark-lighter : ${data.colors.dark.lighter};
--color-dark-darker : ${data.colors.dark.darker};
--color-light-base : ${data.colors.light.base};
--color-light-lighter : ${data.colors.light.lighter};
--color-light-darker : ${data.colors.light.darker};
--color-accent : ${data.colors.accent};

--title-font-family : '${data.typography.fontFamily.title}', sans-serif;
--h1-font-size : ${data.typography.style.h1.size}px;
--h1-font-weight : ${data.typography.style.h1.weight};
--h2-font-size : ${data.typography.style.h2.size}px;
--h2-font-weight : ${data.typography.style.h2.weight};
--h3-font-size : ${data.typography.style.h3.size}px;
--h3-font-weight : ${data.typography.style.h3.weight};
--h4-font-size : ${data.typography.style.h4.size}px;
--h4-font-weight : ${data.typography.style.h4.weight};
--h5-font-size : ${data.typography.style.h5.size}px;
--h5-font-weight : ${data.typography.style.h5.weight};
--h6-font-size : ${data.typography.style.h6.size}px;
--h6-font-weight : ${data.typography.style.h6.weight};

--text-font-family : '${data.typography.fontFamily.text}', sans-serif;
--text-font-size : ${data.typography.style.text}px;

--button-padding-x : ${data.buttons.padding.x}px;
--button-padding-y : ${data.buttons.padding.y}px;
--button-border-radius : ${data.buttons.borderRadius}px;
--button-font-size : ${data.buttons.fontSize}px;
--button-color-text: ${data.buttons.colorText};

--input-padding-x : ${data.inputs.padding.x}px;
--input-padding-y : ${data.inputs.padding.y}px;
--input-border-radius : ${data.inputs.borderRadius}px;
--input-font-size : ${data.inputs.fontSize}px;

--card-padding-x : ${data.cards.padding.x}px;
--card-padding-y : ${data.cards.padding.y}px;
--card-border-radius : ${data.cards.borderRadius}px;
}
`;

  return RootCss;
};

module.exports = generateRoot;