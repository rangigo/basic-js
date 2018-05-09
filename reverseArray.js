const reverseArray = arr => arr.map((el, i) => arr[arr.length-i-1])

const reverseArrayInPlace = arr => {
  for (let i = 0; i < arr.length/2; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
  }
}

console.log(reverseArray(["A", "B", "C"]))
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);