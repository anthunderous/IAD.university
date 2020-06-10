// Simple

function getUniqueRandIntNumbers(amount, min, max) {
  const set = new Set();
  while (set.size !== amount) {
    set.add(getRandomIntNumber(min, max));
  }
  return [...set];
}
function getRandomFloatNumber(min, max, fixed = 2) {
  return (Math.random() * (max - min) + min).toFixed(fixed);
}
function getRandomIntNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function getAverageValue(array) {
  return getSum(array) / array.length;
}

function getSum(array) {
  if (array.length === 0) return 0;
  return array.reduce((prev, curr) => +prev + +curr);
}

function getProduct(array) {
  return array.reduce((prev, curr) => +prev * +curr);
}
// Matrix
function getRandomFromArray(array) {
  const min = 0;
  const max = array.length - 1;
  const rand = Math.round(Math.random() * (max - min) + min);
  return array[rand];
}
function getAllNumbersFromArray(array) {
  const numbers = [];
  for (let val of array) {
    if (Array.isArray(val)) {
      numbers.push(...getAllNumbersFromArray(val));
    } else {
      numbers.push(val);
    }
  }
  return numbers;
}
function getTransposeMatrix(array) {
  const result = [];
  for (let i = 0; i < array[0].length; i++) {
    result.push([]);
    for (let j = 0; j < array.length; j++) {
      result[i][j] = array[j][i];
    }
  }
  return result;
}

function getSumMatrices(matrices) {
  const result = [];
  for (let i = 0; i < matrices[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrices[0][i].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrices.length; k++) {
        sum += matrices[k][i][j];
      }
      let value = sum / D;
      if (isNaN(value)) {
        value = "-";
      }
      result[i].push(value);
    }
  }
  return result;
}

function getSimpleProductOfMatrices(array1, array2) {
  if (array1.length === array2.length)
    return array1.map((val, i) => val * array2[i]);
}
function getSimpleProductOfVectorToMatrix(vector, matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      result[i][j] = vector[j] * matrix[i][j];
    }
  }
  return result;
}

function getSumOfProductOfMatrices(array1, array2) {
  return getSum(getSimpleProductOfMatrices(array1, array2));
}
function sumOfRowItems(array) {
  return array.map((row) => getSum(row));
}
function sumOfColItems(array) {
  return sumOfRowItems(getTransposeMatrix(array));
}
function productOfRowItems(array) {
  return array.map((row) => getProduct(row));
}

function mergeArrays(array1, array2) {
  if (array1.length === array2.length) {
    return array1.map((row, i) => {
      if (Array.isArray(array2[i])) {
        return [...row, ...array2[i]];
      } else {
        return [...row, array2[i]];
      }
    });
  } else {
    alert("Error of arrays merging: arrays dimensions do not match");
  }
}

function getColumnData(array, targetColumn) {
  return array.map((row) => row[targetColumn - 1]);
}
function removeColumn(array, targetColumn) {
  return array.map((row) => row.filter((val, i) => i !== targetColumn - 1));
}

function getSumOfSquareOfDifference(array1, array2) {
  const difference = getDifferenceOfMatrices(array1, array2);
  const poweredMatrix = getPowerOfMatrix(difference, 2);
  return getSum(poweredMatrix);
}
function getDifferenceOfMatrices(matrix1, matrix2) {
  return matrix1.map((val, i) => val - matrix2[i]);
}

function getPowerOfMatrix(matrix, power) {
  return matrix.map((val) => val ** power);
}

function getSumOfColsOfMatrices(matrix) {
  return getTransposeMatrix(matrix).map((row) => getSum(row));
}

function getAvgOfColsOfMatrices(matrix) {
  return getTransposeMatrix(matrix).map((row) => getAverageValue(row));
}

function compareMatrices() {
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arguments[0].length; j++) {
      for (let k = 0; k < arguments[0][0].length; k++) {
        if (arguments[0][j][k] !== arguments[i][j][k]) return false;
      }
    }
  }
  return true;
}

function compareVectors() {
  for (let i = 1; i < arguments.length; i++) {
    let completeMatch = true;
    for (let j = 0; j < arguments[0].length; j++) {
      if (arguments[0][j] !== arguments[i][j]) completeMatch = false;
    }
    if (completeMatch) return true;
  }
  return false;
}
function removeRowsFromMatrix(headers, matrix, rows) {
  const result = {
    data: [],
    dataHeaders: [],
    Xheaders: [],
    X: [],
  };
  matrix.map((row, i) => {
    if (!compareVectors(row, ...rows)) {
      result.Xheaders.push(headers[i]);
      result.X.push(row);
    } else {
      result.data.push(row);
      result.dataHeaders.push(headers[i]);
    }
  });
  return result;
}
