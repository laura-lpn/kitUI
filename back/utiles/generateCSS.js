const generateRoot = require("./generateRoot");
const generateFont = require("./generateFont");
const generateBreakpoints = require("./generateBreakpoints");

const generateCSS = (data) => {
  
  styleFont = generateFont(data.typography.fontFamily.title, data.typography.fontFamily.text);
  styleRoot = generateRoot(data);
  styleBreakpoints = generateBreakpoints(data.layout.breakpoints, data.layout.numColumns);

  const styleCss =styleFont + styleRoot + styleBreakpoints;

  return styleCss;
}

module.exports = generateCSS;