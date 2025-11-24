const removeFromArray = function (arr, ...arg) {
  return arr.filter((curr) => ![...arg].includes(curr));
};

// Do not edit below this line
module.exports = removeFromArray;
