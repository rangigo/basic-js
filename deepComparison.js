const deepEqual = (a, b) => {
  if (a === b) 
    return true
  else if (typeof a == typeof b && a != null && b != null) {
    let isSameProp = false
    let keysOfA = Object.keys(a)
    let keysOfB = Object.keys(b)

    for (let i = 0; i < keysOfA.length; i++) {
      isSameProp = keysOfA[i] == keysOfB[i] ? true : false
    }

    if (isSameProp) {
      for (let i = 0; i < keysOfA.length; i++) {
        return deepEqual(Object.values(a)[i], Object.values(b)[i])
      }
    }
    return false
  }
  else return false

}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

console.log(deepEqual(null, null))