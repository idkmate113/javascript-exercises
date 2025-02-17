const removeFromArray = function (anArray, ...theArgs) {
  anArray = [""];
  return anArray.forEach((theArgs) => {
    if (!anArray === theArgs) {
      anArray.splice(0, theArgs);
    }
  });
};

// Do not edit below this line
module.exports = removeFromArray;
