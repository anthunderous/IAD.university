forelMethod.clusters = [];
forelMethod.step = 1;
forelMethod.Rn = 0;
function forelMethod(data, table, output, headers = null) {
  let X = data;
  let rowHeaders = headers;
  let Xnorm = X;

  console.log("На входе", data, headers);
  let colHeaders = getHeadersByCounter(data[0].length, "X");
  if (!headers) {
    X = removeColumn(data, 1);
    rowHeaders = getColumnData(data, 1);
    Xnorm = normalizeX(X);
    colHeaders = getHeadersByCounter(data[0].length - 1, "X");
  }
  output.printHtml(`<h2>Крок ${forelMethod.step++}</h2>`);

  // Print start data
  table.printTable(X, "Початкові дані", colHeaders, rowHeaders);
  //

  // Print normalize data
  if (!headers) {
    table.printTable(Xnorm, "Нормовані значення", colHeaders, rowHeaders);
  }
  //

  let Xtemp = Xnorm;
  let rowHeadersTemp = rowHeaders;
  let center = Xnorm[getRandomIntNumber(0, X.length - 1)];

  // Compute R
  const R = getR(X, forelMethod.Rn + 1)[forelMethod.Rn];
  if (!headers) {
    table.printTable([getR(X, forelMethod.Rn)], "R", [
      "R0",
      ...getHeadersByCounter(forelMethod.Rn, "R"),
    ]);
    output.printText(`Обране значення R = ${R.toFixed(5)}`);
  }
  // Get center point
  for (let i = 1; i === i; i++) {
    if (i !== 1) {
      const oldCenter = center;
      Xtemp = removeColumn(Xtemp, Xtemp[0].length);
      center = getAvgOfColsOfMatrices(Xtemp);
      if (compareVectors(center, oldCenter)) {
        output.printHtml(
          "<strong>Сфера зупинилась в області локального максимуму щільності точок в просторі ознак</strong>"
        );

        const newData = removeRowsFromMatrix(rowHeaders, Xnorm, Xtemp);
        forelMethod.clusters.push({
          headers: newData.dataHeaders,
          X: newData.data,
        });
        console.log("Кластеры", forelMethod.clusters);

        if (newData.X.length !== 0) {
          forelMethod(newData.X, table, output, newData.Xheaders);
        } else {
          if (forelMethod.clusters.length < forelMethod.minClusters) {
            output.empty();
            forelMethod.Rn++;
            forelMethod.clusters = [];
            forelMethod.step = 1;
            forelMethod(forelMethod.data, table, output);
          } else {
            forelMethod.clusters.forEach((cluster, i) => {
              if (cluster.X.length !== 0) {
                table.printTable(
                  cluster.X,
                  `Кластер ${i + 1}`,
                  colHeaders,
                  cluster.headers
                );
              }
            });
          }
        }
        break;
      }
    }

    table.printTable([center], "Координати обраного центру", colHeaders, [
      "Центр",
    ]);
    //

    // Get distances to center
    const distances = getDistances(Xtemp, center);
    const Xresult = mergeArrays(Xtemp, distances);
    table.printTable(
      Xresult,
      "Відстані до центру",
      [...colHeaders, "Відстань до центру"],
      rowHeadersTemp,
      "Країни",
      "forel",
      R
    );
    //

    Xtemp = Xresult.filter((row) => row[row.length - 1] < R);
    rowHeadersTemp = rowHeadersTemp.filter(
      (row, j) => Xresult[j][Xresult[j].length - 1] < R
    );
  }
}

function normalizeX(X) {
  const result = [];
  const XT = getTransposeMatrix(X);
  const { min, max } = Math;
  for (let i = 0; i < X.length; i++) {
    result.push([]);
    for (let j = 0; j < X[0].length; j++) {
      result[i][j] =
        (X[i][j] - min(...XT[j])) / (max(...XT[j]) - min(...XT[j]));
    }
  }
  return result;
}

function getR(X, amount) {
  const result = [Math.sqrt(X[0].length) / 2];
  for (let i = 1; i <= amount; i++) {
    result[i] = result[i - 1] - (i / 10) * result[i - 1];
  }
  return result;
}

function getDistances(X, center) {
  const result = [];
  for (let i = 0; i < X.length; i++) {
    result.push(Math.sqrt(getSumOfSquareOfDifference(X[i], center)));
  }
  return result;
}
