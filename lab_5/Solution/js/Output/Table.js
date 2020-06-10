class Table extends Output {
  getTableFromArray(
    array,
    tableTitle = null,
    colHeaders = null,
    rowHeaders = null,
    cornerHeader = "",
    method,
    R
  ) {
    const table = $("<table></table>");
    const colors = [
      "aqua",
      "aquamarine",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dodgerblue",
      "firebrick",
      "forestgreen",
      "fuchsia",
      "gold",
      "goldenrod",
      "gray",
      "green",
      "greenyellow",
      "hotpink",
      "indianred",
      "indigo",
      "khaki",
      "lawngreen",
      "lightblue",
      "lightcoral",
      "lightgreen",
      "lightpink",
      "lightsalmon",
      "lime",
      "limegreen",
      "magenta",
      "maroon",
      "mediumblue",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegreen",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "purple",
      "red",
      "rosybrown",
      "royalblue",
      "salmon",
      "sandybrown",
      "seagreen",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "snow",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
    ];
    if (colHeaders) {
      table.append(this.getHeadersRow(colHeaders, rowHeaders, cornerHeader));
    }
    array.forEach((row, i) => {
      const tableRow = $("<tr></tr>");
      switch (method) {
        case "forel":
          if (row[row.length - 1] < R) {
            $(tableRow).addClass("green");
          }
          break;
        case "k-means":
          tableRow.addClass(colors[row[row.length - 1] - 1]);
          break;
      }

      if (rowHeaders) {
        tableRow.append(`<th>${rowHeaders[i]}</th>`);
      }
      row.forEach((col) => {
        tableRow.append($(`<td>${(+col).toFixed(5)}</td>`));
      });
      table.append(tableRow);
    });
    return table;
  }
  printTable(
    array,
    tableTitle = null,
    colHeaders = null,
    rowHeaders = null,
    cornerHeader = "",
    method = null,
    R = null
  ) {
    if (tableTitle)
      this.printHtml(`<div class='table-title'>${tableTitle}</div>`);
    this.printHtml(
      this.getTableFromArray(
        array,
        tableTitle,
        colHeaders,
        rowHeaders,
        cornerHeader,
        method,
        R
      )
    );
  }
  getHeadersRow(headers, isSetRowHeaders, cornerHeader) {
    const row = $("<tr></tr>");
    if (isSetRowHeaders)
      row.append(`<th class="corner-header">${cornerHeader}</th>`);

    headers.forEach((header) => row.append(`<th>${header}</th>`));
    return row;
  }
}
