function kMeans(data, minClusters, table, output) {
  const X = removeColumn(data, 1);
  const rowHeaders = getColumnData(data, 1);
  const colHeaders = getHeadersByCounter(data[0].length - 1, "X");
  let tempResultTable = null;
  let randNumbers = getUniqueRandIntNumbers(minClusters, 0, X.length - 1);
  let clustersCenters = X.filter((val, i) => randNumbers.includes(i));

  // Output of start data
  table.printTable(X, "Початкові дані", colHeaders, rowHeaders, "Страны");
  //

  for (let i = 0; i === i; i++) {
    if (i !== 0) {
      oldClusterCenters = clustersCenters;
      clustersCenters = getClustersCenters(
        tempResultTable,
        oldClusterCenters.length
      );
      if (compareMatrices(oldClusterCenters, clustersCenters)) break;
    }
    output.printHeader(`Крок ${i + 1}`);

    // Search of clusters centers
    table.printTable(
      clustersCenters,
      "Центри кластерів",
      colHeaders,
      getHeadersByCounter(clustersCenters.length, "Центр ")
    );
    //

    // Search of distances beetween clusters centers and observations
    const distances = getTransposeMatrix(getDistances(X, clustersCenters));
    // table.printTable(distances, "Расстояния до центров");
    //

    // Sorted observations by clusters
    const resultTable = mergeArrays(
      mergeArrays(X, distances),
      getCenters(distances)
    );
    const sortedRowHeaders = sortObservationsBYCenters(resultTable, rowHeaders);
    //

    // Print sorted table
    const sortedResultTable = resultTable.sort(
      (a, b) => a[a.length - 1] - b[b.length - 1]
    );
    tempResultTable = sortedResultTable;
    table.printTable(
      sortedResultTable,
      "Расстояния до центров кластеров",
      colHeaders.concat(
        getHeadersByCounter(clustersCenters.length, "Центр ").concat(
          "Номер найближчого центра"
        )
      ),
      sortedRowHeaders,
      "Страны",
      "k-means"
    );
    //
  }

  function sortObservationsBYCenters(clusters, rowHeaders) {
    const mapped = rowHeaders.map((val, i) => {
      return { index: i, value: val };
    });
    mapped.sort((a, b) => {
      return (
        clusters[a.index][clusters[a.index].length - 1] -
        clusters[b.index][clusters[b.index].length - 1]
      );
    });
    return mapped.map((val) => val.value);
  }

  function getCenters(distances) {
    return distances.map(
      (row) => row.indexOf(Math.min(...row.filter((val) => val !== 0))) + 1
    );
  }

  function getDistances(X, clustersCenters) {
    const result = [];
    for (let i = 0; i < clustersCenters.length; i++) {
      result.push([]);
      for (let j = 0; j < X.length; j++) {
        result[i].push(
          Math.sqrt(getSumOfSquareOfDifference(X[j], clustersCenters[i]))
        );
      }
    }
    return result;
  }

  function getClustersCenters(table, oldAmountOfClusters) {
    const result = [];
    const tableT = getTransposeMatrix(table);
    let amount = getUniqueData(tableT[tableT.length - 1]).length;
    for (let i = 1; i <= amount; i++) {
      const clusterData = table.filter((row) => +row[row.length - 1] === i);
      if (clusterData.length) {
        result.push(
          getAvgOfColsOfMatrices(clusterData).slice(0, -oldAmountOfClusters - 1)
        );
      }
    }
    return result;
  }
}
