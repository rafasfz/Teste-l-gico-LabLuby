class Test {
  firstMethod(numberOfElements, element) {
    const newArray = [];

    for(let i=0; i<numberOfElements; i++) newArray.push(element);

    return newArray;
  }

  secondMethod(array) {
    const newArray = [];

    for(let i=array.length - 1; i>=0; i--) newArray.push(array[i]);

    return newArray;
  }

  thirdMethod(array) {
    const newArray = [];

    for(let i=0; i<array.length; i++) {
      if(array[i]) {
        newArray.push(array[i]);
      }
    }

    return newArray;
  }

  fourthMethod(array) {
    const newObject = {};

    array.forEach((arrayChild) => {
      newObject[arrayChild[0]] = arrayChild[1];
    });

    return newObject;
  }

  fifthMethod(array, ...rest) {
    const newArray = [];

    array.forEach((elem) => {
      if(!rest.includes(elem)) {
        newArray.push(elem);
      }
    });

    return newArray;
  }

  sixthMethod(array) {
    const newArray = [];

    array.forEach((elem) => {
      if(!newArray.includes(elem)) {
        newArray.push(elem);
      }
    });

    return newArray;
  }

  eighthMethod(array) {
    const newArray = [];

    array.forEach(elem => {
      if(Array.isArray(elem)) {
        elem.forEach(elemChild => { 
          newArray.push(elemChild);
        });
      } else {
        newArray.push(elem);
      }
    });

    return newArray;
  }

  ninthMethod(array, qty) {
    const newArray = [];
    let counter = 0;
    let auxArray = [];

    array.forEach(elem => {
      if(counter === qty - 1) {
        auxArray.push(elem);
        newArray.push(auxArray);
        auxArray = [];
        counter = 0;
      } else {
        auxArray.push(elem);
        counter++;
      }
    });

    if(!(auxArray.length === 0)) {
      newArray.push(auxArray);
    }

    return newArray;
  }

  tenthMethod(firstArray, secodArray) {
    const newArray = [];

    firstArray.forEach(firstElem => {
      secodArray.forEach(secondElem => {
        if(firstElem === secondElem) {
          newArray.push(firstElem);
        }
      });
    });

    return newArray;
  }
}

const logicTest = new Test();

console.log(logicTest.firstMethod(3, 'a'));
console.log(logicTest.secondMethod([1, 2, 3, 4]));
console.log(logicTest.thirdMethod([ 1, 2, '', undefined ]))
console.log(logicTest.fourthMethod([["c", 2], ["d", 4]]))
console.log(logicTest.fifthMethod([5, 4, 3, 2, 5], 5, 3));
console.log(logicTest.sixthMethod([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));
console.log(logicTest.eighthMethod([1, 2, [3], [4, 5]]));
console.log(logicTest.ninthMethod([1, 2, 3, 4, 5], 2));
console.log(logicTest.tenthMethod([6, 8], [8, 9]));