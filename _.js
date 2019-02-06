const _ = {
  
  // Implement .clamp()
  
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  // Implement .inRange()
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
      };
    if (start > end) {
      const temp = end;
      end = start;
      start = temp;
    };
    const isInRange = (start <= number && number < end);
    return isInRange;  
  },
  
  // Implement .words()
  words(string) {
    return string.split(' ');
  },
  
  // Implement .pad()
  pad(string, length) {
    if (length <= string.length) {
      return string;
    };
    const startPaddingLength = Math.floor((length - string.length) / 2);
    console.log(startPaddingLength);
    const endPaddingLength = length - string.length - startPaddingLength;
    console.log(endPaddingLength);
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  
  // Implement .has()
  has(object, key) {
    const hasValue = object[key] != undefined;
    return hasValue;
	},
  
  // Implement .invert()
  invert(object) {
  	let invertedObject = {};
    for (let currentKey in object) {
      const originalValue = object[currentKey];
      invertedObject[originalValue] = currentKey;
    };
    return invertedObject;
  },
  
  // Implement .findKey()
  findKey(object, predicate) {
    for (let currentKey in object) {
      const value = object[currentKey];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return currentKey;
      };
    };
    return undefined;
  },
  
  // Implement .drop()
  drop(array, num) {
    if (num === undefined) {
      const pos = 1;
      return array.slice(pos);
    };
    const pos = num;
    return array.slice(pos);
  },
  
  // Implement .dropWhile()
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  // Implement .chunk()
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    };
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size){
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;