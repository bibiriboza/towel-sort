module.exports = function towelSort(matrix) {
    return !arguments.length
        ? []
        : matrix
              .map((arr, i) => {
                  return i % 2 ? arr.sort((a, b) => b - a) : arr;
              })
              .flat();
};
