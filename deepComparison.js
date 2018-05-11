const deepEqual = (a, b) => {
  //same value
  if (a === b) return true
  if (typeof a == typeof b && typeof a == 'object') {
    //check if null object (different from empty object)
    if (a === null && b === null) return true
    let keysOfA = Object.keys(a).sort()
    let keysOfB = Object.keys(b).sort()
    // else check if both are empty objects
    if (keysOfA.length == 0 && keysOfB.length == 0) return true
    else {
      let isSameProp = false
      for (let i = 0; i < keysOfA.length; i++) {
        isSameProp = keysOfA[i] == keysOfB[i] ? true : false
      }

      if (isSameProp) {
        let isSameValue = false
        for (let prop in a) {
          // console.log(`${a[prop]} ${b[prop]}`)
          isSameValue = deepEqual(a[prop], b[prop])
          if (!isSameValue) return false
        }
        return isSameValue
      }
    }

    return false
  }
  
  return false
}

let obj = { here: { is: 'an' }, object: 2 }
// console.log(deepEqual(obj, obj))
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }))
// // → false
// console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))

// console.log(deepEqual(null, null))

// console.log(typeof null == typeof undefined)

const assert = {
  isTrue: function(x) {
    console.log('Should be true: ' + x)
  },
  isFalse: function(x) {
    console.log('Should be false: ' + x)
  }
}

assert.isTrue(deepEqual(null, null))
assert.isFalse(deepEqual(null, undefined))
assert.isTrue(deepEqual({}, {}))
assert.isTrue(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))
assert.isTrue(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }))
assert.isFalse(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }))

assert.isTrue(
  deepEqual(
    { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } },
    { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } }
  )
)
assert.isFalse(
  deepEqual(
    { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } },
    { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 27 } }
  )
)
assert.isTrue(deepEqual([], []))
assert.isFalse(deepEqual([1, 2], [3, 4]))

assert.isFalse(
  deepEqual(
    { 1: { name: 'mhc', age: 28 }, 2: { age: 26, name: 'arb' } },
    { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 27 } }
  )
)