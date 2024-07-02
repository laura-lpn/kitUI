const generateBreakpoints = (breakpoints, numColumns) => {
  let breakpointsCss = '';
  
  for (let i = 1; i <= numColumns; i++) {
    breakpointsCss += `
.col-${i} {
grid-column: span ${i};
}
    `;
  }
  
  breakpoints.forEach((breakpoint) => {
    breakpointsCss += `
@media screen and (min-width: ${breakpoint.value}px) {
    `;
    for (let i = 1; i <= numColumns; i++) {
      breakpointsCss += `
.col-${breakpoint.name}-${i} {
  grid-column: span ${i};
}
      `;
    }
    breakpointsCss += `}
    `;
  });

  return breakpointsCss;
}

module.exports = generateBreakpoints;